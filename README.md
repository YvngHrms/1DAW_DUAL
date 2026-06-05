# RetroVisión — Videoclub

**Proyecto Dual Vitaly · Desarrollado por Abraham García Nevado · 2026**

Aplicación web de gestión de un videoclub ficticio llamado RetroVisión. Permite a los usuarios explorar el catálogo de películas y a los administradores gestionar el inventario completo desde el navegador, sin servidor ni base de datos: todo funciona con `localStorage`.

---

## Índice

- [Estructura del proyecto](#estructura-del-proyecto)
- [Páginas y flujo de navegación](#páginas-y-flujo-de-navegación)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Funcionalidades implementadas](#funcionalidades-implementadas)
- [Usuarios de prueba](#usuarios-de-prueba)
- [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [Casos de uso cubiertos](#casos-de-uso-cubiertos)

---

## Estructura del proyecto

```
RetroVision/
│
├── index.html            # Página pública de inicio (hero, catálogo, trailers, contacto)
├── login.html            # Formulario de inicio de sesión
├── registro.html         # Formulario de creación de cuenta
├── homelobby.html        # Área privada del usuario (acceso al catálogo)
├── catalogo.html         # Catálogo de películas disponibles
├── admindashboard.html   # Panel de administración
├── inventario.html       # Control de inventario (solo admin)
│
├── app.js                # Toda la lógica JavaScript de la aplicación
│
├── css/
│   ├── base.css          # Variables globales, reset, tipografía, footer
│   ├── nav.css           # Barra de navegación y botón hamburguesa
│   ├── hero.css          # Sección hero con vídeo de fondo
│   ├── inicio.css        # Secciones de la página pública (stats, catálogo, trailers)
│   ├── dashboard.css     # Panel de usuario y admin, tarjetas de catálogo
│   ├── layout.css        # Layout de dos columnas del inventario
│   ├── inventario.css    # Formularios, tabla y botones del inventario
│   └── responsive.css    # Media queries y menú hamburguesa
│
├── imagenes/
│   ├── RetroVision.png   # Logo del videoclub
│   └── Vitaly.png        # Logo de Vitaly
│
└── video/
    ├── fondo.mp4         # Vídeo de fondo del hero
    ├── trailer1.mp4      # Trailer de Blade Runner
    ├── trailer2.mp4      # Trailer de Pulp Fiction
    └── trailer3.mp4      # Trailer de The Matrix
```

---

## Páginas y flujo de navegación

```
index.html (pública)
    └── login.html
            ├── registro.html
            ├── homelobby.html      ← usuario normal
            │       └── catalogo.html
            └── admindashboard.html ← usuario admin
                    └── inventario.html
```

La sesión activa se guarda en `localStorage` bajo la clave `sesion`. Si el usuario que entra es `admin`, se redirige al panel de administración; cualquier otro va al lobby de usuario.

---

## Tecnologías utilizadas

- **HTML5** — Etiquetas semánticas (`header`, `main`, `section`, `footer`, `nav`), validación nativa de formularios con `required` y atributos `min`, `max`, `step`.
- **CSS3** — Variables CSS (`--rojo`, `--verde`, `--amarillo`…), Flexbox, Grid, media queries para diseño responsive. Tipografías externas: *Permanent Marker* y *Share Tech Mono* (Google Fonts).
- **JavaScript Vanilla** — Manipulación del DOM, manejo de eventos (`submit`, `input`, `click`, `change`), `FileReader` para previsualización de posters, menú hamburguesa.
- **localStorage** — Persistencia de productos, usuarios y sesión activa en el navegador. Sin servidor ni base de datos externa.

---

## Funcionalidades implementadas

### Zona pública (`index.html`)
- Hero con vídeo de fondo a pantalla completa.
- Sección *Quiénes somos* con estadísticas del videoclub.
- Catálogo de categorías (Clásicos, Terror, Acción, Ciencia ficción, Drama, Recomendados).
- Trailers incrustados de tres películas destacadas.
- Sección de contacto con horario y enlace al registro.

### Autenticación
- **Login**: comprueba usuario y contraseña contra los datos guardados en `localStorage`. Muestra mensaje de error si el usuario no existe o la contraseña no es correcta.
- **Registro**: valida que las contraseñas coincidan y que el nombre de usuario no esté ya registrado.
- **Logout**: elimina la sesión de `localStorage` y redirige al inicio.

### Zona de usuario
- Acceso al catálogo completo de películas con tarjeta por título: nombre, descripción, poster, precio, año y estado de stock (disponible / agotado).

### Panel de administración — Inventario
- **Añadir producto**: formulario con nombre, cantidad, precio, descripción, año y poster (imagen). Validación nativa con `required` y validación JavaScript que impide campos vacíos y valores negativos en cantidad y precio.
- **Editar producto**: desplegable que carga los datos actuales del producto seleccionado para modificar cantidad, precio, descripción, año y poster.
- **Eliminar producto**: botón por fila con confirmación antes de borrar.
- **Vender 1 unidad**: botón por fila que resta una unidad al stock automáticamente. Muestra aviso si el producto ya está agotado.
- **Buscador en tiempo real**: filtra la tabla mientras se escribe. La búsqueda persiste al recargar la página.
- **Poster a pantalla completa**: overlay al pulsar el botón de poster en cada fila.
- Filas con stock 0 se marcan visualmente con fondo ámbar.

### Responsive
- Diseño adaptado a móvil, tablet y escritorio mediante media queries en 440 px, 600 px, 700 px y 768 px.
- Menú hamburguesa en pantallas pequeñas con apertura y cierre mediante JavaScript.
- En la tabla del inventario, las columnas de Descripción y Año se ocultan en móvil para que la fila sea legible sin desplazamiento horizontal.

---

## Usuarios de prueba

La aplicación carga automáticamente tres usuarios la primera vez que se abre, si no hay ninguno guardado:

| Usuario  | Contraseña | Rol         |
|----------|-----------|-------------|
| `admin`  | `admin`   | Administrador |
| `Abraham`| `1234`    | Usuario       |
| `Usuario`| `1234`    | Usuario       |

El catálogo inicial se carga también automáticamente con 10 películas de ejemplo.

---

## Cómo ejecutar el proyecto

No requiere instalación ni servidor. Basta con abrir `index.html` en cualquier navegador moderno.

Para evitar restricciones de seguridad con los vídeos locales se recomienda usar un servidor local sencillo, por ejemplo con la extensión **Live Server** de VS Code, o desde la terminal:

```bash
# Con Python 3
python -m http.server 5500

# Con Node.js (npx)
npx serve .
```

Luego abrir `http://localhost:5500` en el navegador.

> Los datos generados (productos añadidos, usuarios registrados) se guardan en el `localStorage` del navegador. Para volver al estado inicial basta con abrir las herramientas de desarrollador y limpiar el `localStorage` de la página.

---

## Casos de uso cubiertos

| CU    | Descripción                          | Estado      |
|-------|--------------------------------------|-------------|
| CU-01 | Alta de producto con validación      | ✅ Completo  |
| CU-02 | Visualización del inventario en tabla| ✅ Completo  |
| CU-03 | Filtrado y búsqueda en tiempo real   | ✅ Completo  |
| CU-04 | Eliminar producto y Vender 1 unidad  | ✅ Completo  |

---

*Proyecto Dual Vitaly — Abraham García Nevado — 2026*
