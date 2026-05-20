<?php
include "db.php";

$nombre = $_POST['nombre'];
$cantidad = $_POST['cantidad'];
$precio = $_POST['precio'];
$descripcion = $_POST['descripcion'];
$anio = $_POST['anio'];

$sql = "INSERT INTO productos (nombre, cantidad, precio, descripcion, anio)
        VALUES ('$nombre', $cantidad, $precio, '$descripcion', $anio)";

$conexion->query($sql);

header("Location: inventario.php");
?>