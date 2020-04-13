<?php
require_once './load.php';
confirm_logged_in();

    if(isset($_POST['submit'])){
        $name = htmlspecialchars(trim($_POST['name']));
        $date = htmlspecialchars(trim($_POST['date']));
        $description = htmlspecialchars(trim($_POST['description']));
        $img = htmlspecialchars(trim($_POST['img']));
        $alt = htmlspecialchars(trim($_POST['alt']));

    if(empty($name) || empty($date) || empty($description) || empty($img) || empty($alt)){
        $message = 'Please fill the required fields';
    }else{
        $message = createEvent($name, $description, $date, $img, $alt);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create Event</title>
</head>
<body>
    <h2>Create Event</h2>
    <h3><a href="index.php">Go Back</a></h3>
    <?php echo !empty($message)? $message: ''; ?>
    <form action="admin_createevent.php" method="post">
    <label>Event Name</label>
    <input type="text" name="name" value=""><br><br>
    <label>Date</label>
    <input type="text" name="date" value=""><br><br>
    <label>Description</label>
    <textarea name="description"></textarea><br><br>
    <label>Image</label>
    <input type="text" name="img" value=""><br><br>
    <label>Alternative Image Text</label>
    <input type="text" name="alt" value=""><br><br>
    <button name="submit">Create Event</button>
    </form>
</body>
</html>