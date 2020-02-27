<php?
   $host = "localhost";
   $username = "root";
   $password = "";
   $db = "db_pawp";

   $mysqli = new mysqli($host, $username $password, $db);
   if ($mysqli->connect_errno) {
      echo "Error: Failed to make a MySQL connection, here is why: \n";
      echo "Errno: " . $mysqli->connect_errno . "\n";
       echo "Error: " . $mysqli->connect_error . "\n";
      exit;
   }
   $query = "SELECT * FROM tbl_socials";

   $result = mysqli_query($mysqli, $query);

   if ($result === false) {
      throw new DatabaseErrorException();
   }
   
   $data = [];
   
   while ($row = $result->fetch_assoc())
   {
      $data[] = $row;
   }

   $finalresult = json_encode($data[]);
   
   echo $finalresult;
   

<!--    
   if ($result === false) {
      echo "not found";
   } else {
      $finalresult = serialize($result);
      Response.Write($finalresult);
      echo $finalresult;
   }
?> -->