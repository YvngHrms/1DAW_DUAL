<?php

// --- CONEXIÓN ---

$conexion = new mysqli("localhost", "root", "", "videoclub");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}


// --- FUNCIONES DE PRODUCTOS ---

function añadirProducto($conexion, $nombre, $cantidad, $precio, $descripcion, $anio) {
    $sql = "INSERT INTO productos (nombre, cantidad, precio, descripcion, anio)
            VALUES ('$nombre', $cantidad, $precio, '$descripcion', $anio)";
    $conexion->query($sql);
}

function actualizarProducto($conexion, $id, $cantidad, $precio, $descripcion, $anio) {
    $sql = "UPDATE productos
            SET cantidad=$cantidad, precio=$precio, descripcion='$descripcion', anio=$anio
            WHERE id=$id";
    $conexion->query($sql);
}

function eliminarProducto($conexion, $id) {
    $conexion->query("DELETE FROM productos WHERE id=$id");
}

function obtenerProductos($conexion) {
    $resultado = $conexion->query("SELECT * FROM productos");
    $productos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $productos[] = $fila;
    }
    return $productos;
}


// --- FUNCIONES DE USUARIOS ---

function procesarLogin($conexion, $usuario, $password) {
    $result = $conexion->query("SELECT * FROM usuarios WHERE usuario = '$usuario'");

    if ($result->num_rows == 0) {
        header("Location: login.php?error=nouser");
        exit;
    }

    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        if ($user['usuario'] == "admin") {
            header("Location: admindashboard.html");
        } else {
            header("Location: home.php");
        }
        exit;
    } else {
        header("Location: login.php?error=wrongpass");
        exit;
    }
}

function procesarRegistro($conexion, $usuario, $email, $password, $password2) {
    if ($password != $password2) {
        header("Location: registro.php?error=pass");
        exit;
    }

    $result = $conexion->query("SELECT * FROM usuarios WHERE usuario = '$usuario'");

    if ($result->num_rows > 0) {
        header("Location: registro.php?error=exists");
        exit;
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $conexion->query("INSERT INTO usuarios (usuario, email, password)
                      VALUES ('$usuario', '$email', '$hash')");

    header("Location: login.php?ok=1");
    exit;
}


// --- DISPATCHER ---
// Se ejecuta solo cuando llega un POST con el campo 'accion'

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['accion'])) {

    switch ($_POST['accion']) {

        case 'añadir_producto':
            añadirProducto($conexion, $_POST['nombre'], $_POST['cantidad'], $_POST['precio'], $_POST['descripcion'], $_POST['anio']);
            header("Location: inventario.php");
            break;

        case 'actualizar_producto':
            actualizarProducto($conexion, $_POST['id'], $_POST['cantidad'], $_POST['precio'], $_POST['descripcion'], $_POST['anio']);
            header("Location: inventario.php");
            break;

        case 'eliminar_producto':
            eliminarProducto($conexion, $_POST['id']);
            header("Location: inventario.php");
            break;

        case 'login':
            procesarLogin($conexion, $_POST['usuario'], $_POST['password']);
            break;

        case 'registro':
            procesarRegistro($conexion, $_POST['usuario'], $_POST['email'], $_POST['password'], $_POST['password2']);
            break;
    }
}
?>