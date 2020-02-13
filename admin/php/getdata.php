<?php

// $host = "localhost";
// $username = "root";
// $password = "";
// $db = "db_pawp";

// $connection = mysql_connect($host, $username, $password);

// if(! $connection ) {
//    die('Could not connect: ' . mysql_error());
// }

// $query = 'SELECT * FROM tbl_';
// mysql_select_db(db);
// $retval = mysql_query( $query, $connection );

// if(! $retval ) {
//    die('Could not get data: ' . mysql_error());
// }

// while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
//    echo $row;
// }

// echo "Fetched data successfully\n";

// mysql_close($connection);

<php?
   $host = "localhost";
   $username = "root";
   $password = "";
   $db = "db_pawp";

   $table = _POST("table");
   $max_rating = _POST("max_rating");
   $total = _POST("total");

   $mysqli = new mysqli($host, $username $password, $db);

   $query = "SELECT * FROM " + $table;

   $result = $mysqli->query($query);

   echo $result;

?>

?>