// Carga usuarios de prueba en el navegador si no existe ninguno guardado
if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify([
        { usuario: 'admin',   email: 'admin@retrovision.com',   password: 'admin' },
        { usuario: 'Abraham', email: 'Abraham@retrovision.com', password: '1234'  },
        { usuario: 'Usuario', email: 'Usuario@retrovision.com', password: '1234'  }
    ]));
}

if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify([
        { id: 1,  nombre: 'Blade Runner',                    categoria: 'Ciencia ficción', cantidad: 5,  precio: 14.99, descripcion: 'Un policía especializado caza replicantes en un Los Ángeles distópico del futuro.',                       anio: 1982, poster: './posters/blade-runner.webp' },
        { id: 2,  nombre: 'Pulp Fiction',                    categoria: 'Clásico',         cantidad: 8,  precio: 13.99, descripcion: 'Historias de crimen entrelazadas en el Los Ángeles de los bajos fondos. Obra maestra de Tarantino.',       anio: 1994, poster: './posters/pulp-fiction.webp' },
        { id: 3,  nombre: 'The Matrix',                      categoria: 'Ciencia ficción', cantidad: 6,  precio: 12.99, descripcion: 'Un programador descubre que la realidad que conoce es una simulación controlada por máquinas.',            anio: 1999, poster: './posters/the-matrix.webp' },
        { id: 4,  nombre: 'El Silencio de los Corderos',     categoria: 'Terror',          cantidad: 4,  precio: 11.99, descripcion: 'Una agente del FBI consulta a un brillante y peligroso psiquiatra para atrapar a un asesino en serie.',   anio: 1991, poster: './posters/silencio-corderos.jpg' },
        { id: 5,  nombre: 'Alien',                           categoria: 'Terror',          cantidad: 7,  precio: 11.50, descripcion: 'La tripulación de una nave espacial se enfrenta a un organismo extraterrestre letal e imparable.',         anio: 1979, poster: './posters/alien.jpg' },
        { id: 6,  nombre: 'Terminator 2',                    categoria: 'Acción',          cantidad: 9,  precio: 12.50, descripcion: 'Un cyborg del futuro protege a un joven John Connor de un asesino más avanzado enviado para eliminarlo.',  anio: 1991, poster: './posters/terminator2.jpg' },
        { id: 7,  nombre: 'El Padrino',                      categoria: 'Clásico',         cantidad: 3,  precio: 15.99, descripcion: 'La saga de la familia Corleone y su dominio sobre el crimen organizado en la América de posguerra.',       anio: 1972, poster: './posters/padrino.jpg' },
        { id: 8,  nombre: 'Apocalypse Now',                  categoria: 'Clásico',         cantidad: 4,  precio: 14.50, descripcion: 'Un capitán del ejército remonta un río en Vietnam para eliminar a un coronel que ha enloquecido.',        anio: 1979, poster: './posters/apocalypse-now.jpg' },
        { id: 9,  nombre: 'El Resplandor',                   categoria: 'Terror',          cantidad: 6,  precio: 12.99, descripcion: 'Un escritor y su familia pasan el invierno en un hotel aislado donde fuerzas sobrenaturales lo devoran.',  anio: 1980, poster: './posters/el-resplandor.jpg' },
        { id: 10, nombre: 'Mad Max: Fury Road',              categoria: 'Acción',          cantidad: 8,  precio: 13.50, descripcion: 'En un mundo postapocalíptico, una guerrera escapa de un tirano cruzando el desierto a toda velocidad.',    anio: 2015, poster: './posters/mad-max-fury-road.jpg' },
        { id: 11, nombre: 'Akira',                           categoria: 'Animación',       cantidad: 5,  precio: 13.99, descripcion: 'En el Neo-Tokio del futuro, un motorista desata poderes psíquicos que podrían destruir la ciudad.',        anio: 1988, poster: './posters/akira.jpg' },
        { id: 12, nombre: 'Ghost in the Shell',              categoria: 'Animación',       cantidad: 4,  precio: 13.50, descripcion: 'Una cyborg policía investiga a un misterioso hacker mientras cuestiona su propia humanidad.',              anio: 1995, poster: './posters/ghost-in-the-shell.jpeg' },
        { id: 13, nombre: 'RoboCop',                         categoria: 'Acción',          cantidad: 7,  precio: 10.99, descripcion: 'Un policía asesinado regresa convertido en un cyborg para limpiar las calles de una Detroit corrupta.',    anio: 1987, poster: './posters/robocop.jpg' },
        { id: 14, nombre: 'Trainspotting',                   categoria: 'Drama',           cantidad: 5,  precio: 11.99, descripcion: 'La vida caótica de un grupo de jóvenes heroinómanos en Edimburgo. Cruda y adictiva.',                      anio: 1996, poster: './posters/trainspotting.jpg' },
        { id: 15, nombre: 'Los Amantes del Círculo Polar',   categoria: 'Drama',           cantidad: 3,  precio: 12.50, descripcion: 'Dos adolescentes se enamoran y sus destinos quedan entrelazados para siempre de forma circular.',          anio: 1998, poster: './posters/amantes-circulo-polar.jpg' },
        { id: 16, nombre: 'El Séptimo Sello',                categoria: 'Clásico',         cantidad: 2,  precio: 10.50, descripcion: 'Un caballero medieval juega al ajedrez con la Muerte mientras busca el sentido de la existencia.',        anio: 1957, poster: './posters/septimo-sello.jpg' },
        { id: 17, nombre: 'Nosferatu',                       categoria: 'Terror',          cantidad: 4,  precio: 9.99,  descripcion: 'El conde Orlok, vampiro de aspecto cadavérico, siembra el terror en un pueblo alemán. Cine mudo esencial.', anio: 1922, poster: './posters/nosferatu.jpg' },
        { id: 18, nombre: 'Scarface',                        categoria: 'Acción',          cantidad: 6,  precio: 12.99, descripcion: 'Tony Montana emigra de Cuba y escala a lo más alto del narcotráfico de Miami dejando un rastro de sangre.', anio: 1983, poster: './posters/scarface.jpg' },
        { id: 19, nombre: 'Brazil',                          categoria: 'Ciencia ficción', cantidad: 3,  precio: 13.50, descripcion: 'Un burócrata en una sociedad totalitaria kafkiana escapa de la realidad a través de sus propias fantasías.',  anio: 1985, poster: './posters/brazil.jpg' },
        { id: 20, nombre: 'Reservoir Dogs',                  categoria: 'Clásico',         cantidad: 5,  precio: 11.99, descripcion: 'Tras un atraco que sale mal, los ladrones sospechan que uno de ellos es un infiltrado de la policía.',       anio: 1992, poster: './posters/reservoir-dogs.jpg' },
        { id: 21, nombre: 'Una Noche en la Tierra',          categoria: 'Drama',           cantidad: 2,  precio: 11.50, descripcion: 'Cinco historias de taxistas y pasajeros en cinco ciudades del mundo, todas en la misma noche.',              anio: 1991, poster: './posters/noche-en-la-tierra.jpg' },
        { id: 22, nombre: 'El Club de la Lucha',             categoria: 'Clásico',         cantidad: 7,  precio: 13.99, descripcion: 'Un hombre insatisfecho forma un club de pelea clandestino con un carismático vendedor de jabón.',            anio: 1999, poster: './posters/club-de-la-lucha.jpg' },
        { id: 23, nombre: 'Escape from New York',            categoria: 'Acción',          cantidad: 5,  precio: 10.99, descripcion: 'En 1997, Manhattan es una prisión. Un ex militar debe rescatar al presidente secuestrado en 24 horas.',       anio: 1981, poster: './posters/escape-from-new-york.jpg' },
        { id: 24, nombre: 'Frankenstein de Mary Shelley',    categoria: 'Terror',          cantidad: 3,  precio: 10.50, descripcion: 'El doctor Frankenstein crea vida a partir de cadáveres con consecuencias devastadoras para todos.',           anio: 1994, poster: './posters/frankenstein.jpg' },
        { id: 25, nombre: 'La Naranja Mecánica',             categoria: 'Clásico',         cantidad: 4,  precio: 14.99, descripcion: 'Alex y su banda de drugos ejercen la ultraviolencia en una Gran Bretaña distópica y futurista.',            anio: 1971, poster: './posters/naranja-mecanica.jpg' },
        { id: 26, nombre: 'Commando',                        categoria: 'Acción',          cantidad: 10, precio: 9.99,  descripcion: 'Un ex boina verde entra en acción cuando secuestran a su hija. Acción pura de los 80, sin disculpas.',         anio: 1985, poster: './posters/commando.jpg' },
        { id: 27, nombre: 'Soylent Green',                   categoria: 'Ciencia ficción', cantidad: 2,  precio: 12.99, descripcion: 'En 2022, un detective investiga un asesinato y descubre el oscuro secreto detrás del alimento que sustenta a la humanidad.', anio: 1973, poster: './posters/soylent-green.jpg' },
        { id: 28, nombre: 'El Orfanato',                     categoria: 'Terror',          cantidad: 6,  precio: 11.99, descripcion: 'Una mujer regresa al orfanato donde creció y su hijo desaparece entre presencias que no son de este mundo.',  anio: 2007, poster: './posters/el-orfanato.jpg' },
        { id: 29, nombre: 'Ciudad de Dios',                  categoria: 'Drama',           cantidad: 4,  precio: 13.50, descripcion: 'La historia real de cómo el crimen y la violencia arrasaron las favelas de Río de Janeiro durante décadas.', anio: 2002, poster: './posters/ciudad-de-dios.jpg' },
        { id: 30, nombre: 'Nausicaä del Valle del Viento',   categoria: 'Animación',       cantidad: 5,  precio: 13.99, descripcion: 'Una princesa guerrera lucha por preservar la paz entre naciones en un mundo devastado por la contaminación.', anio: 1984, poster: './posters/nausicaa.jpg' }
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

        let clases = i % 2 === 0 ? 'fila-par' : 'fila-impar';
        if (parseInt(p.cantidad) === 0) clases += ' sin-stock';
        tr.className = clases;

        tr.innerHTML =
            '<td><button class="btn-poster" onclick="mostrarPoster(\'' + (p.poster || '') + '\')">🎞️ Poster</button></td>' +
            '<td>' + p.nombre + '</td>' +
            '<td>' + p.categoria + '</td>' +
            '<td>' + p.cantidad + '</td>' +
            '<td>' + p.precio + '</td>' +
            '<td>' + p.descripcion + '</td>' +
            '<td>' + p.anio + '</td>' +
            '<td class="td-acciones">' +
                '<button class="btn-vender" onclick="venderProducto(' + p.id + ')">Vender 1</button>' +
                '<button class="btn-eliminar" onclick="eliminarProducto(' + p.id + ')">Eliminar</button>' +
            '</td>';
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

// Aplica los filtros de búsqueda y categoría guardados, y refresca la tabla y el desplegable
function cargarInventario() {
    const busqueda  = localStorage.getItem('ultimaBusqueda') || '';
    const categoria = localStorage.getItem('ultimaCategoria') || '';
    const productos = getProductos();

    let filtrado = [];
    for (let i = 0; i < productos.length; i++) {
        const coincideNombre    = productos[i].nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoria === '' || productos[i].categoria === categoria;

        if (coincideNombre && coincideCategoria) {
            filtrado.push(productos[i]);
        }
    }

    const input = document.getElementById('filtro-nombre');
    if (input) input.value = busqueda;

    const selectCategoria = document.getElementById('filtro-categoria');
    if (selectCategoria) selectCategoria.value = categoria;

    renderTabla(filtrado);
    renderSelect();
}

// Recoge los campos del formulario y añade un nuevo producto al catálogo
const formAnadir = document.getElementById('form-anadir');
if (formAnadir) {
    formAnadir.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombreVal   = document.getElementById('nombre').value.trim();
        const cantidadVal = parseFloat(document.getElementById('cantidad').value);
        const precioVal   = parseFloat(document.getElementById('precio').value);
        const error       = document.getElementById('mensaje');

        if (nombreVal === '') {
            error.textContent = 'El nombre del producto no puede estar vacío.';
            error.style.display = 'block';
            setTimeout(function () { error.style.display = 'none'; }, 3000);
            return;
        }

        if (isNaN(cantidadVal) || cantidadVal < 0) {
            error.textContent = 'La cantidad no puede estar vacía ni ser negativa.';
            error.style.display = 'block';
            setTimeout(function () { error.style.display = 'none'; }, 3000);
            return;
        }

        if (isNaN(precioVal) || precioVal < 0) {
            error.textContent = 'El precio no puede estar vacío ni ser negativo.';
            error.style.display = 'block';
            setTimeout(function () { error.style.display = 'none'; }, 3000);
            return;
        }

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
            categoria:   document.getElementById('categoria').value,
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

        document.getElementById('edit-categoria').value   = p.categoria;
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

        productos[idx].categoria   = document.getElementById('edit-categoria').value;
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

// Resta 1 unidad al stock del producto con el id indicado
function venderProducto(id) {
    const productos = getProductos();
    let idx = -1;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            idx = i;
            break;
        }
    }

    if (idx === -1) return;

    if (parseInt(productos[idx].cantidad) <= 0) {
        const error = document.getElementById('mensaje');
        error.textContent = 'No hay stock disponible para vender.';
        error.style.display = 'block';
        setTimeout(function () { error.style.display = 'none'; }, 3000);
        return;
    }

    productos[idx].cantidad = parseInt(productos[idx].cantidad) - 1;
    localStorage.setItem('productos', JSON.stringify(productos));
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

// Filtra la tabla al cambiar la categoría en el desplegable de búsqueda
const selectFiltroCategoria = document.getElementById('filtro-categoria');
if (selectFiltroCategoria) {
    selectFiltroCategoria.addEventListener('change', function () {
        localStorage.setItem('ultimaCategoria', this.value);
        cargarInventario();
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