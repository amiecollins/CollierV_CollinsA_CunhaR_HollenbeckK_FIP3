<?php
require_once './load.php';
confirm_logged_in();

    if(isset($_POST['submit'])){
        $name = htmlspecialchars(trim($_POST['name']));
        $url = htmlspecialchars(trim($_POST['url']));
        $description = htmlspecialchars(trim($_POST['description']));

    if(empty($name) || empty($url) || empty($description)){
        $message = 'Please fill the required fields';
    }else{
        $message = createResource($name, $url, $description);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create Resource</title>
</head>
<body>
    <h2>Create Resource</h2>
    <h3><a href="index.php">Go Back</a></h3>
    <?php echo !empty($message)? $message: ''; ?>
    <form action="admin_createres.php" method="post">
    <label>Website Name</label>
    <input type="text" name="name" value=""><br><br>
    <label>URL</label>
    <input type="text" name="url" value=""><br><br>
    <label>Description</label>
    <textarea name="description"></textarea><br><br>
    <button name="submit">Create Resource</button>
    </form>
</body>
</html>