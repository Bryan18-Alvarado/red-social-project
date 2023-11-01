const listaPublicaciones = document.getElementById('lista_publicaciones'); // Lista de publicaciones
const input = document.getElementById('input_descripcion'); // Descripción de la publicación
const inputImagen = document.getElementById("input-imagen"); 
const imagenesPublicadas = document.getElementById("imagenes-publicadas");
const botonPublicar = document.getElementById('btnPublicar');

// Función para crear una publicación con botón de eliminar
function crearPublicacion(contenido, imagen) {
  const publicacion = document.createElement('li');
  const eliminarBoton = document.createElement('button');
  eliminarBoton.textContent = 'Eliminar';
  eliminarBoton.className = 'btn-eliminar';

  eliminarBoton.addEventListener('click', () => {
    // Al hacer clic en el botón de eliminar, eliminamos la publicación y su imagen
    publicacion.remove();
    if (imagen) {
      imagen.remove();
    }
  });

  publicacion.textContent = contenido;
  publicacion.appendChild(eliminarBoton);
  listaPublicaciones.appendChild(publicacion);
}

// Funcionalidad de los botones crear publicación y publicar, además del input de descripción
botonPublicar.addEventListener('click', () => {
  if (input.value) {
    crearPublicacion(input.value, inputImagen.files.length > 0 ? crearImagen(inputImagen) : null);
    input.value = '';
    inputImagen.value = '';
  }
});

// Función para crear una imagen
function crearImagen(inputImagen) {
  const imagen = document.createElement('img');
  imagen.src = URL.createObjectURL(inputImagen.files[0]);
  imagenesPublicadas.appendChild(imagen);
  return imagen;
} 
