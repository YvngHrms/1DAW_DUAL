<?php
include "db.php";

$usuario = $_POST['usuario'];
$password = $_POST['password'];

$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
$result = $conexion->query($sql);

if ($result->num_rows == 0) {
    header("Location: login.php?error=nouser");
    exit;
}

$user = $result->fetch_assoc();

if (password_verify($password, $user['password'])) {

    if ($user['usuario'] == "admin") {
        header("Location: admindashboard.html");
        exit;
    } else {
        header("Location: home.php");
        exit;
    }

} else {
    header("Location: login.php?error=wrongpass");
    exit;
}
?>