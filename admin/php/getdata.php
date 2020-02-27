<?php
   $host = "localhost";
   $username = "root";
   $password = "";
   $db = "db_pawp";

   try {
      $mysqli = new mysqli($host, $username, $password, $db);
   } catch (Exception $e) {
      $error = $e->getMessage();
      echo $error;
      die;
   }
   
   echo "connected!"; // remove this line after testing your connection
   
   $query = "SELECT * FROM tbl_socials";

   $result = mysqli_query($mysqli, $query);
   
   $data = [];
   
   while ($row = $result->fetch_assoc())
   {
      $data[] = $row;
   }

   $finalresult = json_encode($data);
   
   echo $finalresult;

   ?>