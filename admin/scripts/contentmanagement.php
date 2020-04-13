<?php
function createResource($title, $desc, $link){
    $pdo = Database::getInstance()->getConnection();
    
    //TODO: finish the below so that it can run a SQL query
    // to create a new user with provided data

    $create_resource_query = 'INSERT INTO tbl_resources(name, description, url) VALUES (:title, :desc, :link)';
    

    $create_resource_set = $pdo->prepare($create_resource_query);
    $create_resource_result = $create_resource_set->execute(
        array(
            ':title'=>$title,
            ':desc'=>$desc,
            ':link'=>$link
        )
    );
    //TODO: redirect to index.php if create user successfully
    // otherwise, return
    if($create_resource_result){
        return $title.' has been added';
    }else{
        return 'The item did not go through';
    }

}
function createEvent ($title, $desc, $date, $img, $alt){
    $pdo = Database::getInstance()->getConnection();
    
    //TODO: finish the below so that it can run a SQL query
    // to create a new user with provided data

    $create_partner_query = 'INSERT INTO tbl_partner (name, date, description, img, alt) VALUES (:title, :date, :desc, :img, :alt)';
    

    $create_partner_set = $pdo->prepare($create_partner_query);
    $create_partner_result = $create_partner_set->execute(
        array(
            ':title'=>$title,
            ':date'=>$date,
            ':desc'=>$desc,
            ':img'=>$img,
            ':alt'=>$alt
        )
    );
    //TODO: redirect to index.php if create user successfully
    // otherwise, return
    if($create_partner_result){
        return $title.' has been added';
    }else{
        return 'The item did not go through';
    }

}

function createPartner($title, $link, $img){
    $pdo = Database::getInstance()->getConnection();
    
    //TODO: finish the below so that it can run a SQL query
    // to create a new user with provided data

    $create_partner_query = 'INSERT INTO tbl_get_help (name, url, img_url) VALUES (:title, :link, :img)';
    

    $create_partner_set = $pdo->prepare($create_partner_query);
    $create_partner_result = $create_partner_set->execute(
        array(
            ':title'=>$title,
            ':link'=>$link,
            ':img'=>$img
        )
    );
    //TODO: redirect to index.php if create user successfully
    // otherwise, return
    if($create_partner_result){
        return $title.' has been added';
    }else{
        return 'The item did not go through';
    }

}
