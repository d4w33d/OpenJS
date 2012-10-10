<?php

  require '../bind/bind.php';
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

    <script
      data-openjs="bootstrap"
      data-openjs-verbose="yes"
      ></script>

    <style type="text/css">
      html { overflow: hidden; }
      body { margin: 0; font-family: Arial, sans-serif; }
      h1 {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        margin: -15px 0 0 0;
        padding: 0;
        color: #666;
        text-align: center;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        font-size: 25px;
        font-weight: normal;
      }
    </style>

  </head>

  <body>

    <h1>
      <strong>OpenJS</strong>
      &ndash; Go to JavaScript console
    </h1>

  </body>

</html>
