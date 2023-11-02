const usuarios = [
  { id: 1, nombre: "Juan Pérez", seguido: false },
  { id: 2, nombre: "María González", seguido: false },
  { id: 3, nombre: "Carlos Rodríguez", seguido: false },
  { id: 4, nombre: "Bryan Alvarado", seguido: false },
  { id: 5, nombre: "Katia Silva", seguido: false },

];

const inputBusqueda = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const listaUsuarios = document.getElementById('listaUsuarios');
// Función para buscar usuarios
function buscarUsuarios() {
  const filtro = inputBusqueda.value.toLowerCase(); // Obtener el texto de búsqueda en minúsculas
  // Filtrar usuarios que coincidan con el texto de búsqueda
  const usuariosFiltrados = usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(filtro));
  // Limpiar la lista de usuarios antes de mostrar los resultados
  listaUsuarios.innerHTML = '';

  // Mostrar usuarios encontrados
  usuariosFiltrados.forEach(usuario => {
    const itemUsuario = document.createElement('li');
    itemUsuario.textContent = usuario.nombre;

    // Botón de seguir
    const seguirBoton = document.createElement('button');
    seguirBoton.textContent = usuario.seguido ? 'Siguiendo' : 'Seguir';

    seguirBoton.addEventListener('click', () => {
      // Alternar el estado de seguimiento del usuario
      usuario.seguido = !usuario.seguido;
      seguirBoton.textContent = usuario.seguido ? 'Siguiendo' : 'Seguir';
    });

    itemUsuario.appendChild(seguirBoton);
    listaUsuarios.appendChild(itemUsuario);
  });
}

// Escuchar el evento de clic en el botón de búsqueda
btnBuscar.addEventListener('click', buscarUsuarios);

// Escuchar el evento de entrada en el campo de búsqueda
inputBusqueda.addEventListener('input', buscarUsuarios);
