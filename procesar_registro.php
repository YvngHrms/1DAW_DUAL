<?php
include "db.php";

$usuario = $_POST['usuario'];
$email = $_POST['email'];
$password = $_POST['password'];
$password2 = $_POST['password2'];

if ($password != $password2) {
    header("Location: registro.php?error=pass");
    exit;
}

$check = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
$result = $conexion->query($check);

if ($result->num_rows > 0) {
    header("Location: registro.php?error=exists");
    exit;
}

$hash = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (usuario, email, password)
        VALUES ('$usuario', '$email', '$hash')";

$conexion->query($sql);

header("Location: login.php?ok=1");
exit;
?>