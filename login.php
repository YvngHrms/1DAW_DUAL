<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="Abraham García Nevado">
    <title>Proyecto Dual Vitaly - Retrovision login</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <nav>
        <ul>
            <li><a href="retrovision.html">← Volver al inicio</a></li>
        </ul>
        <div class="nav-logos">
            <a href="retrovision.html">
                <img src="./imagenes/RetroVision.png" alt="RetroVisión" class="nav-logo">
            </a>
            <a href="https://vitaly.es/" target="_blank">
                <img src="./imagenes/Vitaly.png" alt="Vitaly" class="nav-logo">
            </a>
        </div>
    </nav>

    <main id="login-main">
        <div class="login-card">
            <h1>Identifícate</h1>
            <?php
            if (isset($_GET['error'])) {
                if ($_GET['error'] == "nouser") echo "<p style='color:red; padding:8px 16px;'>El usuario no existe. Regístrate.</p>";
                if ($_GET['error'] == "wrongpass") echo "<p style='color:red; padding:8px 16px;'>Contraseña incorrecta.</p>";
            }
            ?>
            <form action="funciones.php" method="POST">
                <input type="hidden" name="accion" value="login">
                <div class="campo">
                    <label for="usuario">Usuario</label>
                    <input type="text" id="usuario" name="usuario" placeholder="tu_usuario" autocomplete="username">
                </div>
                <div class="campo">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" autocomplete="current-password">
                </div>
                <button type="submit">Entrar</button>
            </form>
            <p class="login-pie">¿No tienes cuenta? <a href="registro.php">Regístrate</a></p>
        </div>
    </main>

    <footer>
        <div class="footer-content">
            <img src="./imagenes/RetroVision.png" alt="RetroVisión">
            <div class="footer-text">
                <p><strong>Videoclub RetroVisión</strong> — Desde 1994</p>
                <p>Proyecto Dual Vitaly · Desarrollado por Abraham García Nevado</p>
                <p>&copy; 2026 RetroVisión. Todos los derechos reservados.</p>
            </div>
            <img src="./imagenes/Vitaly.png" alt="Vitaly">
        </div>
    </footer>

</body>
</html>