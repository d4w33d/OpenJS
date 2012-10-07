
$o.req.opt({
    plugins_dir: 'js/',
    special_dirs: {
        vendor: 'vendor/'
    }
});

$o.req(['vendor:jquery'], function($) {
    var mod = {};

    mod.init = function() {
        console.log('Example.js is ready');
        this.dispatch();
    };

    mod.dispatch = function() {
        var handler = 'home';
        console.log('Dispatching to ' + handler + ' handler');
        $o.req(['handlers/home'], function(homeHandler) {
            homeHandler.run();
        });
    };

    return mod;
});
