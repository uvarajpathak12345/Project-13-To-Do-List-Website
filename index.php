<?php
$server = "localhost";
$user = "root";
$pass = "";
$dbname = "todolist";

$conn = new mysqli($server,$user,$pass,$dbname);

if($conn->connect_error){
    die("error" . $conn->connect_error);
}else{
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $Tasks = $_POST['text'];

        $sql ="INSERT INTO task (Task) VALUES ('$Tasks')";

        if($conn->query($sql) === TRUE){
            

        }
    }
}

?>