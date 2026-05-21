// ── USUARIOS POR DEFECTO ──

if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify([
        { usuario: 'admin',   email: 'admin@retrovision.com',   password: 'admin' },
        { usuario: 'Abraham', email: 'Abraham@retrovision.com', password: '1234'  },
        { usuario: 'Usuario', email: 'Usuario@retrovision.com', password: '1234'  }
    ]));
}

if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify([]));
}

function getUsuarios()  { return JSON.parse(localStorage.getItem('usuarios'))  || []; }
function getProductos() { return JSON.parse(localStorage.getItem('productos')) || []; }


// ── LOGIN ──

const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();
        const usuario  = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value;
        const user     = getUsuarios().find(u => u.usuario === usuario);
        const error    = document.getElementById('error-msg');

        if (!user)                    { error.textContent = 'El usuario no existe. Regístrate.'; return; }
        if (user.password !== password) { error.textContent = 'Contraseña incorrecta.'; return; }

        localStorage.setItem('sesion', JSON.stringify({ usuario: user.usuario, esAdmin: user.usuario === 'admin' }));
        window.location.href = user.usuario === 'admin' ? 'admindashboard.html' : 'homelobby.html';
    });
}


// ── REGISTRO ──

const formRegistro = document.getElementById('form-registro');
if (formRegistro) {
    formRegistro.addEventListener('submit', function (e) {
        e.preventDefault();
        const usuario   = document.getElementById('usuario').value.trim();
        const email     = document.getElementById('email').value.trim();
        const password  = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;
        const usuarios  = getUsuarios();
        const error     = document.getElementById('error-msg');

        if (password !== password2)               { error.textContent = 'Las contraseñas no coinciden.'; return; }
        if (usuarios.find(u => u.usuario === usuario)) { error.textContent = 'Ese usuario ya existe.'; return; }

        usuarios.push({ usuario, email, password });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        window.location.href = 'login.html';
    });
}


// ── LOGOUT ──

const btnLogout = document.getElementById('btn-logout');
if (btnLogout) {
    btnLogout.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('sesion');
        window.location.href = 'index.html';
    });
}


// ── INVENTARIO ──

function renderTabla(lista) {
    const tbody = document.getElementById('tbody-productos');
    if (!tbody) return;
    tbody.innerHTML = '';
    lista.forEach(function (p) {
        const tr = document.createElement('tr');
        tr.innerHTML =
            '<td>' + p.nombre + '</td>' +
            '<td>' + p.cantidad + '</td>' +
            '<td>' + p.precio + '</td>' +
            '<td>' + p.descripcion + '</td>' +
            '<td>' + p.anio + '</td>' +
            '<td><button class="btn-eliminar" onclick="eliminarProducto(' + p.id + ')">Eliminar</button></td>';
        tbody.appendChild(tr);
    });
}

function renderSelect() {
    const select = document.getElementById('producto-editar');
    if (!select) return;
    select.innerHTML = '<option value="">-- Selecciona --</option>';
    getProductos().forEach(function (p) {
        select.innerHTML += '<option value="' + p.id + '">' + p.nombre + '</option>';
    });
}

function cargarInventario() {
    const busqueda  = localStorage.getItem('ultimaBusqueda') || '';
    const productos = getProductos();
    const filtrado  = busqueda
        ? productos.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        : productos;
    const input = document.getElementById('filtro-nombre');
    if (input) input.value = busqueda;
    renderTabla(filtrado);
    renderSelect();
}

// Añadir
const formAnadir = document.getElementById('form-anadir');
if (formAnadir) {
    formAnadir.addEventListener('submit', function (e) {
        e.preventDefault();
        const productos = getProductos();
        const nuevoId   = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
        productos.push({
            id:          nuevoId,
            nombre:      document.getElementById('nombre').value.trim(),
            cantidad:    document.getElementById('cantidad').value,
            precio:      document.getElementById('precio').value,
            descripcion: document.getElementById('descripcion').value.trim(),
            anio:        document.getElementById('anio').value
        });
        localStorage.setItem('productos', JSON.stringify(productos));
        formAnadir.reset();
        cargarInventario();
    });
}

// Autocomplete al seleccionar producto a editar
const selectEditar = document.getElementById('producto-editar');
if (selectEditar) {
    selectEditar.addEventListener('change', function () {
        const p = getProductos().find(p => p.id == this.value);
        if (!p) return;
        document.getElementById('edit-cantidad').value    = p.cantidad;
        document.getElementById('edit-precio').value      = p.precio;
        document.getElementById('edit-descripcion').value = p.descripcion;
        document.getElementById('edit-anio').value        = p.anio;
    });
}

// Guardar edición
const formEditar = document.getElementById('form-editar');
if (formEditar) {
    formEditar.addEventListener('submit', function (e) {
        e.preventDefault();
        const id  = parseInt(document.getElementById('producto-editar').value);
        if (!id) return;
        const productos = getProductos();
        const idx       = productos.findIndex(p => p.id === id);
        if (idx === -1) return;
        productos[idx].cantidad    = document.getElementById('edit-cantidad').value;
        productos[idx].precio      = document.getElementById('edit-precio').value;
        productos[idx].descripcion = document.getElementById('edit-descripcion').value.trim();
        productos[idx].anio        = document.getElementById('edit-anio').value;
        localStorage.setItem('productos', JSON.stringify(productos));
        formEditar.reset();
        cargarInventario();
    });
}

// Eliminar
function eliminarProducto(id) {
    localStorage.setItem('productos', JSON.stringify(getProductos().filter(p => p.id !== id)));
    cargarInventario();
}

// Búsqueda en tiempo real
const inputBuscar = document.getElementById('filtro-nombre');
if (inputBuscar) {
    inputBuscar.addEventListener('input', function () {
        localStorage.setItem('ultimaBusqueda', this.value);
        cargarInventario();
    });
    inputBuscar.closest('form').addEventListener('submit', e => e.preventDefault());
}

if (document.getElementById('tbody-productos')) cargarInventario();