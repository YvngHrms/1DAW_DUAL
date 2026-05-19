<?php
include "db.php";

$resultado = $conexion->query("SELECT * FROM productos");

$productos = [];

while ($fila = $resultado->fetch_assoc()) {
    $productos[] = $fila;
}

echo json_encode($productos);
?>