const inputBusqueda = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const listaUsuarios = document.getElementById('listaUsuarios');

function buscarUsuarios() {
  const filtro = inputBusqueda.value.toLowerCase();
  // Obtener los datos de usuarios del localStorage
  const usuariosData = JSON.parse(localStorage.getItem('users')) || [];

  // Limpiar la lista de usuarios antes de mostrar los resultados
  listaUsuarios.innerHTML = '';

  // Mostrar usuarios encontrados
  usuariosData.forEach(usuario => {
    if (usuario.username.toLowerCase().includes(filtro)) {
      const itemUsuario = document.createElement('li');
      itemUsuario.textContent = usuario.username;

      // Botón de seguir
      const seguirBoton = document.createElement('button');
      seguirBoton.textContent = usuario.seguido ? 'Siguiendo' : 'Seguir';

      seguirBoton.addEventListener('click', () => {
        // Alternar el estado de seguimiento del usuario
        usuario.seguido = !usuario.seguido;
        seguirBoton.textContent = usuario.seguido ? 'Siguiendo' : 'Seguir';
        // Actualizar el estado de seguimiento en el localStorage
        actualizarSeguimientoEnLocalStorage(usuariosData);
      });

      itemUsuario.appendChild(seguirBoton);
      listaUsuarios.appendChild(itemUsuario);
    }
  });
}

function actualizarSeguimientoEnLocalStorage(usuariosData) {
  // Actualizar el estado de seguimiento en el localStorage
  localStorage.setItem('users', JSON.stringify(usuariosData));
}


// Escuchar el evento de clic en el botón de búsqueda
btnBuscar.addEventListener('click', buscarUsuarios);

// Escuchar el evento de entrada en el campo de búsqueda
inputBusqueda.addEventListener('input', buscarUsuarios);
