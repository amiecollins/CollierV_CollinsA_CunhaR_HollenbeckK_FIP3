<?php
function createUser ($fname, $username, $password, $email){
    $pdo = Database::getInstance()->getConnection();
    
    //TODO: finish the below so that it can run a SQL query
    // to create a new user with provided data

    $create_user_query = 'INSERT INTO tbl_users(fname, uname, pword, email, ip) VALUES (:fname, :username, :password, :email, "no" )';
    

    $create_user_set = $pdo->prepare($create_user_query);
    $create_user_result = $create_user_set->execute(
        array(
            ':fname'=>$fname,
            ':username'=>$username,
            ':password'=>$password,
            ':email'=>$email,
        )
    );
    //TODO: redirect to index.php if creat user successfully
    // otherwise, return
    if($create_user_result){
        redirect_to('index.php');
    }else{
        return 'The user did not go through';
    }

}

function getAllUsers(){
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_users';
    $users = $pdo->query($get_user_query);

    if($users) {
        return $users;
    }else{
        return false;
    }
}

function getSingleUser($id){
    $pdo = Database::getInstance()->getConnection();
    //TODO: execute the proper SQL query to fetch the user data
    $get_user_query = 'SELECT * FROM tbl_users WHERE id = :id';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute(
        array(
            ':id' =>$id
        )
    );
        //TODO: if the execution is successful, return the user data
        // Otherwise, return an error message
    if($get_user_result){
        return $get_user_result;
    }else{
        return 'There was a problem accessing the user';
    }
}

function editUser($id, $fname, $username, $password, $email){
        //TODO: set up database connection
        $pdo = Database::getInstance()->getConnection();

        //TODO: Run the proper SQL query to update tbl_users with proper values
        $update_user_query = 'UPDATE tbl_users SET fname = :fname, uname = :username,';
        $update_user_query.=' pword=:password, email =:email WHERE id = :id';
        $update_user_set = $pdo->prepare($update_user_query);
        $update_user_result = $update_user_set->execute(
            array(
                ':fname'=>$fname,
                ':username'=>$username,
                ':password'=>$password,
                ':email'=>$email,
                ':id'=>$id,
            )
        );
        

        //TODO: if everything goes well, redirect user to index.php
        //Otherwise, return some error message...
        if($update_user_result){
            redirect_to('index.php');
        }else{
            return 'Guess you got canned...';
        }
}

function deleteUser($id){
    $pdo = Database::getInstance()->getConnection();

    $delete_user_query = 'DELETE FROM `tbl_users` WHERE id = :id';
    $delete_user_set = $pdo->prepare($delete_user_query);
    $delete_user_result = $delete_user_set->execute(
        array(
            ':id'=>$id,
        )
    );
    
    if($delete_user_result && $delete_user_set->rowCount() > 0){
        redirect_to('admin_deleteuser.php');
    }else{
        return false;
    }

}