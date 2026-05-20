<?php
include "db.php";

$id = $_POST['id'];
$cantidad = $_POST['cantidad'];
$precio = $_POST['precio'];
$descripcion = $_POST['descripcion'];
$anio = $_POST['anio'];

$sql = "UPDATE productos 
        SET cantidad=$cantidad, precio=$precio, descripcion='$descripcion', anio=$anio
        WHERE id=$id";

$conexion->query($sql);

header("Location: inventario.php");
?>