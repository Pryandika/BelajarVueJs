<?php
 
$conn = new mysqli("localhost", "root", "", "bmta");
 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);
 
$bmta = 'read';

if(isset($_GET['bmta'])){
   $bmta = $_GET['bmta'];
}
 
 
if($bmta = 'read'){
    $sql = "select * from tlokasi";
    $query = $conn->query($sql);
    $members = array();
 
    while($row = $query->fetch_array()){
        array_push($members, $row);
    }
 
    $out['members'] = $members;
}
 
 
$conn->close();
 
header("Content-type: application/json");
echo json_encode($out);
die();
 
 
?>