<?php

define('DS', DIRECTORY_SEPARATOR);
define('ROOT_DIR', dirname(dirname(__file__)));
define('SRC_DIR', ROOT_DIR . DS . 'src');
define('PLUGINS_DIR', SRC_DIR . DS . 'plugins');

class Binder
{

    public function getFiles($withFullPath = false)
    {
        $dir = $withFullPath ? SRC_DIR . DS : '';
        $files = array();
        $files[] = $dir . 'open.js';
        $iterator = new DirectoryIterator(PLUGINS_DIR);
        foreach ($iterator as $f) {
            $path = $f->getPathname();
            if (!$f->isFile() || substr($path, -3) != '.js')
            {
                continue;
            }
            if (!$withFullPath)
            {
                $path = substr($path, strlen(SRC_DIR . DS));
            }
            $files[] = $path;
        }
        $files[] = $dir . 'open.eof.js';
        return $files;
    }

    public function generateBinder($minified = false)
    {
        $bind = '';
        foreach ($this->getFiles(true) as $f)
        {
            $bind .= file_get_contents($f);
        }
        if ($minified)
        {
            require_once ROOT_DIR . DS . 'bind' . DS . 'vendor' . DS .
                'JShrink' . DS . 'Minifier.php';
            $bind = trim(JShrink\Minifier::minify($bind));
        }
        return $bind;
    }

    public function directOutput($minified = false)
    {
        header('Content-type: text/javascript; charset=utf-8');
        echo $this->generateBinder($minified);
    }

}

if (isset($_GET['live']))
{
    $binder = new Binder();
    $binder->directOutput(true);
}
