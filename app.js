// Carga usuarios de prueba en el navegador si no existe ninguno guardado
if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify([
        { usuario: 'admin',   email: 'admin@retrovision.com',   password: 'admin' },
        { usuario: 'Abraham', email: 'Abraham@retrovision.com', password: '1234'  },
        { usuario: 'Usuario', email: 'Usuario@retrovision.com', password: '1234'  }
    ]));
}

// Carga el catálogo inicial de películas si no hay productos guardados
if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify([
        { id: 1,  nombre: 'Píxeles de Sangre',           cantidad: 7,  precio: 12.99, descripcion: 'Un hacker descubre que su vida es parte de un videojuego mortal.',       anio: 2018, poster: '' },
        { id: 2,  nombre: 'Calle Futura 2099',            cantidad: 4,  precio: 14.50, descripcion: 'Pandillas cibernéticas luchan por el control de la última ciudad libre.', anio: 2022, poster: '' },
        { id: 3,  nombre: 'El Último Verano en Marsella', cantidad: 10, precio: 9.99,  descripcion: 'Un amor imposible entre dos jóvenes en la costa francesa.',              anio: 2016, poster: '' },
        { id: 4,  nombre: 'Fragmentos de Memoria',        cantidad: 0,  precio: 15.99, descripcion: 'Un hombre despierta sin recordar quién es y sigue pistas de su pasado.', anio: 2020, poster: '' },
        { id: 5,  nombre: 'Neon Samurai',                 cantidad: 6,  precio: 13.75, descripcion: 'Un samurái del futuro combate en un Tokio dominado por IA corrupta.',    anio: 2021, poster: '' },
        { id: 6,  nombre: 'La Casa del Eco',              cantidad: 8,  precio: 11.20, descripcion: 'Una familia escucha voces del pasado dentro de su nueva casa.',          anio: 2017, poster: '' },
        { id: 7,  nombre: 'Proyecto Ícaro',               cantidad: 0,  precio: 16.00, descripcion: 'Un experimento espacial sale mal y la tripulación pierde la cordura.',   anio: 2019, poster: '' },
        { id: 8,  nombre: 'Bajo Cero 88',                 cantidad: 12, precio: 8.99,  descripcion: 'Supervivientes atrapados en una base polar tras una tormenta global.',   anio: 2014, poster: '' },
        { id: 9,  nombre: 'Código Eclipse',               cantidad: 0,  precio: 14.99, descripcion: 'Un grupo de hackers intenta evitar el colapso de internet mundial.',     anio: 2023, poster: '' },
        { id: 10, nombre: 'Rutas de Humo',                cantidad: 6,  precio: 10.50, descripcion: 'Un detective sigue una red de narcotráfico en una ciudad corrupta.',     anio: 2015, poster: '' }
    ]));
}

// Devuelve el array de usuarios guardado en el navegador
function getUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Devuelve el array de productos guardado en el navegador
function getProductos() {
    return JSON.parse(localStorage.getItem('productos')) || [];
}


// ── LOGIN ──
// Comprueba credenciales y redirige al admin o al lobby según el usuario que entra

const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario  = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value;
        const error    = document.getElementById('error-msg');
        const usuarios = getUsuarios();

        let user = null;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].usuario === usuario) {
                user = usuarios[i];
                break;
            }
        }

        if (user === null) {
            error.textContent = 'El usuario no existe. Regístrate.';
            return;
        }

        if (user.password !== password) {
            error.textContent = 'Contraseña incorrecta.';
            return;
        }

        localStorage.setItem('sesion', JSON.stringify({ usuario: user.usuario, esAdmin: user.usuario === 'admin' }));

        if (user.usuario === 'admin') {
            window.location.href = 'admindashboard.html';
        } else {
            window.location.href = 'homelobby.html';
        }
    });
}


// ── REGISTRO ──
// Valida el formulario y guarda el nuevo usuario si los datos son correctos

const formRegistro = document.getElementById('form-registro');
if (formRegistro) {
    formRegistro.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario   = document.getElementById('usuario').value.trim();
        const email     = document.getElementById('email').value.trim();
        const password  = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;
        const error     = document.getElementById('error-msg');
        const usuarios  = getUsuarios();

        if (password !== password2) {
            error.textContent = 'Las contraseñas no coinciden.';
            return;
        }

        let yaExiste = false;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].usuario === usuario) {
                yaExiste = true;
                break;
            }
        }

        if (yaExiste) {
            error.textContent = 'Ese usuario ya existe.';
            return;
        }

        usuarios.push({ usuario: usuario, email: email, password: password });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        window.location.href = 'login.html';
    });
}


// ── LOGOUT ──
// Borra la sesión activa del navegador y redirige a la página de inicio

const btnLogout = document.getElementById('btn-logout');
if (btnLogout) {
    btnLogout.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('sesion');
        window.location.href = 'index.html';
    });
}


// ── INVENTARIO ──

// Dibuja las filas de la tabla con los productos de la lista recibida
function renderTabla(lista) {
    const tbody = document.getElementById('tbody-productos');
    if (!tbody) return;

    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        const p  = lista[i];
        const tr = document.createElement('tr');
        if (parseInt(p.cantidad) === 0) tr.className = 'sin-stock';
        tr.innerHTML =
            '<td><button class="btn-poster" onclick="mostrarPoster(\'' + (p.poster || '') + '\')">🎞️ Poster</button></td>' +
            '<td>' + p.nombre + '</td>' +
            '<td>' + p.cantidad + '</td>' +
            '<td>' + p.precio + '</td>' +
            '<td>' + p.descripcion + '</td>' +
            '<td>' + p.anio + '</td>' +
            '<td><button class="btn-eliminar" onclick="eliminarProducto(' + p.id + ')">Eliminar</button></td>';
        tbody.appendChild(tr);
    }
}

// Rellena el desplegable de edición con los nombres de los productos actuales
function renderSelect() {
    const select = document.getElementById('producto-editar');
    if (!select) return;

    select.innerHTML = '<option value="">-- Selecciona --</option>';

    const productos = getProductos();
    for (let i = 0; i < productos.length; i++) {
        const p = productos[i];
        select.innerHTML += '<option value="' + p.id + '">' + p.nombre + '</option>';
    }
}

// Aplica el filtro de búsqueda guardado y refresca la tabla y el desplegable
function cargarInventario() {
    const busqueda  = localStorage.getItem('ultimaBusqueda') || '';
    const productos = getProductos();

    let filtrado = [];
    if (busqueda === '') {
        filtrado = productos;
    } else {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre.toLowerCase().includes(busqueda.toLowerCase())) {
                filtrado.push(productos[i]);
            }
        }
    }

    const input = document.getElementById('filtro-nombre');
    if (input) input.value = busqueda;

    renderTabla(filtrado);
    renderSelect();
}

// Recoge los campos del formulario y añade un nuevo producto al catálogo
const formAnadir = document.getElementById('form-anadir');
if (formAnadir) {
    formAnadir.addEventListener('submit', function (e) {
        e.preventDefault();

        const productos = getProductos();

        let nuevoId = 1;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id >= nuevoId) {
                nuevoId = productos[i].id + 1;
            }
        }

        const fileInput = document.getElementById('poster');
        const file = fileInput.files[0];

        const nuevoProducto = {
            id:          nuevoId,
            nombre:      document.getElementById('nombre').value.trim(),
            cantidad:    document.getElementById('cantidad').value,
            precio:      document.getElementById('precio').value,
            descripcion: document.getElementById('descripcion').value.trim(),
            anio:        document.getElementById('anio').value,
            poster:      ''
        };

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                nuevoProducto.poster = e.target.result;
                productos.push(nuevoProducto);
                localStorage.setItem('productos', JSON.stringify(productos));
                formAnadir.reset();
                cargarInventario();
            };
            reader.readAsDataURL(file);
        } else {
            productos.push(nuevoProducto);
            localStorage.setItem('productos', JSON.stringify(productos));
            formAnadir.reset();
            cargarInventario();
        }
    });
}

// Al elegir un producto del desplegable, rellena los campos con sus datos actuales
const selectEditar = document.getElementById('producto-editar');
if (selectEditar) {
    selectEditar.addEventListener('change', function () {
        const productos = getProductos();
        let p = null;

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id == this.value) {
                p = productos[i];
                break;
            }
        }

        if (p === null) return;

        document.getElementById('edit-cantidad').value    = p.cantidad;
        document.getElementById('edit-precio').value      = p.precio;
        document.getElementById('edit-descripcion').value = p.descripcion;
        document.getElementById('edit-anio').value        = p.anio;
    });
}

// Sobreescribe los datos del producto seleccionado con los valores del formulario de edición
const formEditar = document.getElementById('form-editar');
if (formEditar) {
    formEditar.addEventListener('submit', function (e) {
        e.preventDefault();

        const id        = parseInt(document.getElementById('producto-editar').value);
        const productos = getProductos();

        if (!id) return;

        let idx = -1;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === id) {
                idx = i;
                break;
            }
        }

        if (idx === -1) return;

        productos[idx].cantidad    = document.getElementById('edit-cantidad').value;
        productos[idx].precio      = document.getElementById('edit-precio').value;
        productos[idx].descripcion = document.getElementById('edit-descripcion').value.trim();
        productos[idx].anio        = document.getElementById('edit-anio').value;

        const fileEditInput = document.getElementById('edit-poster');
        const fileEdit = fileEditInput.files[0];

        if (fileEdit) {
            const reader = new FileReader();
            reader.onload = function (e) {
                productos[idx].poster = e.target.result;
                localStorage.setItem('productos', JSON.stringify(productos));
                formEditar.reset();
                cargarInventario();
            };
            reader.readAsDataURL(fileEdit);
        } else {
            localStorage.setItem('productos', JSON.stringify(productos));
            formEditar.reset();
            cargarInventario();
        }
    });
}

// Elimina el producto con el id indicado tras pedir confirmación al usuario
function eliminarProducto(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar este producto? Esta acción no se puede deshacer.')) return;

    const productos  = getProductos();
    const nuevaLista = [];

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id !== id) {
            nuevaLista.push(productos[i]);
        }
    }

    localStorage.setItem('productos', JSON.stringify(nuevaLista));
    cargarInventario();
}

// Filtra la tabla en tiempo real mientras el usuario escribe en el campo de búsqueda
const inputBuscar = document.getElementById('filtro-nombre');
if (inputBuscar) {
    inputBuscar.addEventListener('input', function () {
        localStorage.setItem('ultimaBusqueda', this.value);
        cargarInventario();
    });
    inputBuscar.closest('form').addEventListener('submit', function (e) {
        e.preventDefault();
    });
}


// ── POSTER ──
// Muestra la imagen del poster en un overlay a pantalla completa
function mostrarPoster(src) {
    if (!src) { alert('Este producto no tiene poster.'); return; }
    document.getElementById('poster-img').src = src;
    document.getElementById('poster-overlay').style.display = 'flex';
}

// Oculta el overlay del poster al pulsar el botón de cerrar
function cerrarPoster() {
    document.getElementById('poster-overlay').style.display = 'none';
}


// ── CATÁLOGO USUARIO ──
// Genera una tarjeta visual por cada película y la inserta en el grid del catálogo
function renderCatalogo() {
    const grid = document.getElementById('grid-catalogo');
    if (!grid) return;

    const productos = getProductos();
    grid.innerHTML = '';

    for (let i = 0; i < productos.length; i++) {
        const p = productos[i];

        let textoStock;
        let claseStock;
        if (parseInt(p.cantidad) > 0) {
            textoStock = 'Stock: ' + p.cantidad;
            claseStock = 'disponible';
        } else {
            textoStock = 'Agotado';
            claseStock = 'agotado';
        }

        const tarjeta = document.createElement('div');
        tarjeta.className = 'pelicula-card';

        tarjeta.innerHTML =
            '<h3>' + p.nombre + '</h3>' +
            '<p class="pelicula-desc">' + p.descripcion + '</p>' +
            (p.poster
                ? '<img class="pelicula-poster" src="' + p.poster + '" alt="Poster de ' + p.nombre + '">'
                : '<div class="pelicula-poster pelicula-sin-poster">Póster no disponible</div>') +
            '<div class="pelicula-meta">' +
                '<span class="pelicula-precio">' + parseFloat(p.precio).toFixed(2) + '€</span>' +
                '<span class="pelicula-anio">' + p.anio + '</span>' +
                '<span class="pelicula-stock ' + claseStock + '">' + textoStock + '</span>' +
            '</div>';

        grid.appendChild(tarjeta);
    }
}


// ── MENÚ HAMBURGUESA ──
// Abre y cierra el menú de navegación en dispositivos móviles
const hamburguesa = document.getElementById('nav-hamburguesa');
if (hamburguesa) {
    hamburguesa.addEventListener('click', function () {
        const ul = this.closest('nav').querySelector('ul');
        if (ul.classList.contains('abierto')) {
            ul.classList.remove('abierto');
        } else {
            ul.classList.add('abierto');
        }
    });

    // Cierra el menú al pulsar cualquier enlace dentro de él
    const navLinks = hamburguesa.closest('nav').querySelectorAll('ul a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            hamburguesa.closest('nav').querySelector('ul').classList.remove('abierto');
        });
    }
}


// ── ARRANQUE ──
// Espera a que el DOM esté listo antes de ejecutar las funciones que pintan datos en pantalla
document.addEventListener('DOMContentLoaded', function () {

    if (document.getElementById('grid-catalogo')) {
        renderCatalogo();
    }

    if (document.getElementById('tbody-productos')) {
        cargarInventario();
    }

});