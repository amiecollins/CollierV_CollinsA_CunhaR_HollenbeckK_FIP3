<?php
    require_once 'load.php';
    confirm_logged_in();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome! <?php echo $_SESSION['uname'];?>
    (<a href="admin_logout.php">Sign Out?</a>)</h2>
    <ul>
        <li><h3>User Settings</h3></li>
        <li><a href="admin_createuser.php">Create User</a></li>
        <li><a href="admin_edituser.php">Edit User</a></li>
        <li><a href="admin_deleteuser.php">Delete User</a></li>
    </ul>
    <ul>
        <li><h3>Add New Content</h3></li>
        <li><a href="admin_createres.php">Create Resources</a></li>
        <li><a href="admin_createevent.php">Create Event</a></li>
        <li><a href="admin_createpartner.php">Create Partner</a></li>
    </ul>
    <ul>
        <li><h3>Edit Content</h3></li>
        <li><a href="admin_editres.php">Edit Resources</a></li>
        <li><a href="admin_editevent.php">Edit Event</a></li>
        <li><a href="admin_editpartner.php">Edit Partner</a></li>
    </ul>
    
    
    
</body>
</html>