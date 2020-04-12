<?php
require_once './load.php';
confirm_logged_in();

    if(isset($_POST['submit'])){
        $name = htmlspecialchars(trim($_POST['name']));
        $link = htmlspecialchars(trim($_POST['link']));
        $img = htmlspecialchars(trim($_POST['img']));
        $alt = htmlspecialchars(trim($_POST['alt']));

    if(empty($name) || empty($link) || empty($img) || empty($alt)){
        $message = 'Please fill the required fields';
    }else{
        $message = createPartner($name, $link, $img, $alt);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create Partner</title>
</head>
<body>
    <h2>Create Partner</h2>
    <h3><a href="index.php">Go Back</a></h3>
    <?php echo !empty($message)? $message: ''; ?>
    <form action="admin_createres.php" method="post">
    <label>Partner Name</label>
    <input type="text" name="name" value=""><br><br>
    <label>Link</label>
    <input type="text" name="link" value=""><br><br>
    <label>Image</label>
    <input type="text" name="img" value=""><br><br>
    <label>Alternative Image Text</label>
    <input type="text" name="alt" value=""><br><br>
    <button name="submit">Create Partner</button>
    </form>
</body>
</html>