<?php

$pdo = Database::getInstance()->getConnection();
$query = 'SELECT * FROM tbl_resources';
$results = $pdo->query($query);

if(!empty($results)){
    echo json_encode($results);
}else{
    echo json_encode('There was a problem acessing this info');
}

?>