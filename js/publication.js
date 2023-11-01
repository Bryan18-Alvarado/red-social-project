const listaPublicaciones = document.getElementById('lista_publicaciones'); //lista de publicaciones
const input = document.getElementById('input_descripcion'); //descripcion de la publicacion
const inputImagen = document.getElementById("input-imagen"); 
const imagenesPublicadas = document.getElementById("imagenes-publicadas");
const botonPublicar = document.getElementById('btnPublicar');
const listaComentario = document.getElementById('input_comentario');

// Funcionalidad de los botones crear publicación y publicar, además del input de descripción
botonPublicar.addEventListener('click', onClickAdd);

function onClickAdd() {
  if (input.value) {
    // Se crea un elemento `li` para representar la publicación de texto
    const publicacionTexto = document.createElement('li');
    publicacionTexto.textContent = input.value;
    listaPublicaciones.appendChild(publicacionTexto);

    // Se verifica si se ha seleccionado una imagen
    if (inputImagen.files.length > 0) {
      // Se crea un elemento `img` para representar la imagen
      const imagen = document.createElement('img');
      const file = inputImagen.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        // Se configura la fuente de la imagen
        imagen.src = e.target.result;
      };

      reader.readAsDataURL(file); //accede a el dispositivo  y extrae una imagen

      // Se agrega el elemento de imagen al contenedor de imágenes publicadas
      imagenesPublicadas.appendChild(imagen);
    }

    // Se limpian los campos de entrada
    input.value = '';
    inputImagen.value = '';

    // Se deshabilita el botón de publicar hasta que el usuario ingrese una descripción
    botonPublicar.disabled = true;
  }
}

// Se escucha el evento `input` en el campo de entrada de descripción
input.addEventListener('input', () => {
  // Se habilita el botón de publicar si el usuario ha ingresado una descripción
  botonPublicar.disabled = input.value.length === 0;
});

function guardar() {
  // Código para mostrar una notificación o realizar alguna acción al guardar
}

