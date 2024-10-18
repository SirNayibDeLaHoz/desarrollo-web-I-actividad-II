// Jugadores iniciales estáticos
let jugadores = [
    {
        cedula: "123456789",
        nombre: "Luis",
        apellido: "Diaz",
        email: "luis@example.com",
        telefono: "3001234567",
        direccion: "Calle Falsa 123",
        fechaNacimiento: "1991-07-12",
        posicion: "Extremo izquierdo"
    },
    {
        cedula: "987654321",
        nombre: "Miguel",
        apellido: "Borja",
        email: "borja@example.com",
        telefono: "3109876543",
        direccion: "Avenida Siempre Viva 456",
        fechaNacimiento: "1993-01-26",
        posicion: "Delantero"
    },
    {
        cedula: "555666777",
        nombre: "Juan",
        apellido: "Dúran",
        email: "Duran@example.com",
        telefono: "3115556667",
        direccion: "Calle 10 No. 20",
        fechaNacimiento: "2003-12-13",
        posicion: "Delantero"
    }
];

// Función para validar si la cédula ya existe
function idExiste(cedula) {
    return jugadores.some(jugador => jugador.cedula === cedula);
}

// Función para cargar los jugadores en la tabla
function cargarJugadores() {
    const tableBody = document.getElementById('jugadoresTableBody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos jugadores
    jugadores.forEach(jugador => {
        const row = `
        <tr>
          <td>${jugador.cedula}</td>
          <td>${jugador.nombre}</td>
          <td>${jugador.apellido}</td>
          <td>${jugador.email}</td>
          <td>${jugador.telefono}</td>
          <td>${jugador.direccion}</td>
          <td>${jugador.fechaNacimiento}</td>
          <td>${jugador.posicion}</td>
        </tr>
      `;
        tableBody.innerHTML += row;
    });
}

// Función para agregar un nuevo jugador con validaciones
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const cedula = document.getElementById('cedula').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const posicion = document.getElementById('posicion').value;

    // Validaciones

    // 1. Validar que todos los campos sean obligatorios
    if (!cedula || !nombre || !apellido || !email || !telefono || !direccion || !fechaNacimiento || !posicion) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Todos los campos son obligatorios."
        });
        return;
    }

    // 2. Validar que la cédula solo contenga números
    if (!/^\d+$/.test(cedula)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La cédula solo puede contener números."
        });
        return;
    }

    // 3. Validar si el ID (cédula) ya existe
    if (idExiste(cedula)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ya existe jugador"
        });
        return;
    }

    // 3. Validar que el telefono solo contenga números
    if (!/^\d+$/.test(cedula)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Teléfono solo puede contener números."
        });
        return;
    }

    // Si todas las validaciones pasan, agregar el nuevo jugador
    const nuevoJugador = {
        cedula,
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        fechaNacimiento,
        posicion
    };

    // Agregar el nuevo jugador al array
    jugadores.push(nuevoJugador);

    // Limpiar el formulario
    this.reset();

    // Recargar la tabla con los nuevos jugadores
    cargarJugadores();
});

// Evento para listar los jugadores iniciales
document.getElementById('listarJugadoresBtn').addEventListener('click', cargarJugadores);