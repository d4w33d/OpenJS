<?php

  require '../bind.php';
  $binder = new Binder();

?>
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <title>OpenJS</title>

    <?php foreach ($binder->getFiles() as $f): ?>
      <script type="text/javascript" src="../src/<?php echo $f; ?>"></script>
    <?php endforeach; ?>

    <script data-bootstrap="bootstrap"></script>

  </head>

  <body>

    <strong>OpenJS</strong> &ndash; Go to JavaScript console

  </body>

</html>
