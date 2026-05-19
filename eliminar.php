<?php
include "db.php";

$id = $_POST['id'];

$sql = "DELETE FROM productos WHERE id=$id";
$conexion->query($sql);

header("Location: index.php");
exit;
?>