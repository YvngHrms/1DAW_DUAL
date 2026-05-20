<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="Abraham García Nevado">
    <title>Proyecto Dual Vitaly - Control de inventario videoclub</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <?php include "db.php"; ?>

    <nav>
        <div class="nav-logos">
            <a href="retrovision.html">
                <img src="./imagenes/RetroVision.png" alt="RetroVisión" class="nav-logo">
            </a>
        </div>
        <ul>
            <li><a href="#añadir-producto">Añadir</a></li>
            <li><a href="#editar-producto">Editar</a></li>
            <li><a href="#productos">Tabla</a></li>
            <li><a href="retrovision.html">← Inicio</a></li>
        </ul>
        <div class="nav-logos">
            <a href="https://vitaly.es/" target="_blank">
                <img src="./imagenes/Vitaly.png" alt="Vitaly" class="nav-logo">
            </a>
        </div>
    </nav>

    <header>
        <h1 class="titulo">Videoclub: RetroVisión — Control de inventario</h1>
    </header>

    <div class="layout-principal">

        <div class="columna-forms">

            <section id="busqueda">
                <label for="filtro-nombre">🔎 Buscar producto</label>
                <input type="text" id="filtro-nombre" placeholder="Escribe el nombre...">
            </section>

            <section id="añadir-producto" class="card">
                <h1>Añadir producto</h1>
                <form action="insertar.php" method="POST">
                    <div>
                        <label for="nombre">Nombre del producto</label>
                        <span aria-hidden="true"></span>
                        <input type="text" id="nombre" name="nombre">
                    </div>
                    <div>
                        <label for="cantidad">Cantidad</label>
                        <span aria-hidden="true"></span>
                        <input type="number" id="cantidad" name="cantidad">
                    </div>
                    <div>
                        <label for="precio">Precio</label>
                        <span aria-hidden="true"></span>
                        <input type="number" id="precio" name="precio">
                    </div>
                    <div>
                        <label for="descripcion">Descripción</label>
                        <span aria-hidden="true"></span>
                        <input type="text" id="descripcion" name="descripcion">
                    </div>
                    <div>
                        <label for="anio">Año lanzamiento</label>
                        <span aria-hidden="true"></span>
                        <input type="number" id="anio" name="anio" min="1900" max="2026">
                    </div>
                    <button type="submit">Añadir producto</button>
                </form>
            </section>

            <section id="editar-producto" class="card">
                <h1>Editar producto</h1>
                <form action="editar.php" method="POST">
                    <div>
                        <label for="producto-editar">Producto</label>
                        <span aria-hidden="true"></span>
                        <select id="producto-editar" name="id" required>
                            <option value="">-- Selecciona --</option>
                            <?php
                            $result = $conexion->query("SELECT id, nombre FROM productos");
                            while ($row = $result->fetch_assoc()) {
                                echo "<option value='{$row['id']}'>{$row['nombre']}</option>";
                            }
                            ?>
                        </select>
                    </div>
                    <div>
                        <label for="edit-cantidad">Cantidad</label>
                        <span aria-hidden="true"></span>
                        <input type="number" id="edit-cantidad" name="cantidad" min="0" required>
                    </div>
                    <div>
                        <label for="edit-precio">Precio</label>
                        <span aria-hidden="true"></span>
                        <input type="number" id="edit-precio" name="precio" min="0" step="0.01" required>
                    </div>
                    <div>
                        <label for="edit-descripcion">Descripción</label>
                        <span aria-hidden="true"></span>
                        <input type="text" id="edit-descripcion" name="descripcion">
                    </div>
                    <div>
                        <label for="edit-anio">Año lanzamiento</label>
                        <span aria-hidden="true"></span>
                        <input type="number" id="edit-anio" name="anio" min="1900" max="2026">
                    </div>
                    <button type="submit">Guardar cambios</button>
                </form>
            </section>

        </div>

        <div class="columna-tabla">

            <section id="productos">
                <h1>Productos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Año</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $resultado = $conexion->query("SELECT * FROM productos");
                        while ($fila = $resultado->fetch_assoc()) {
                            echo "<tr>
                                <td>{$fila['nombre']}</td>
                                <td>{$fila['cantidad']}</td>
                                <td>{$fila['precio']}</td>
                                <td>{$fila['descripcion']}</td>
                                <td>{$fila['anio']}</td>
                                <td>
                                    <form action='eliminar.php' method='POST'>
                                        <input type='hidden' name='id' value='{$fila['id']}'>
                                        <button type='submit' class='btn-eliminar'>Eliminar</button>
                                    </form>
                                </td>
                            </tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </section>

        </div>

    </div>

    <footer>
        <div class="footer-content">
            <img src="./imagenes/RetroVision.png" alt="RetroVisión">
            <div class="footer-text">
                <p><strong>Videoclub RetroVisión</strong> — Control de inventario</p>
                <p>Proyecto Dual Vitaly · Desarrollado por Abraham García Nevado</p>
                <p>&copy; 2026 RetroVisión. Todos los derechos reservados.</p>
            </div>
            <img src="./imagenes/Vitaly.png" alt="Vitaly">
        </div>
    </footer>

    <div id="mensaje" role="status" aria-live="polite"></div>

</body>
</html>