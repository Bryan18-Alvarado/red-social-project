const botonComentarios = document.getElementById('btnComentario');
const listaComentarios = document.getElementById('lista_comentario');
const input_comment = document.getElementById('input_comentario');

// Se agrega el código para comentar
botonComentarios.addEventListener('click', onClickAdd);

function onClickAdd() {
  // Se crea un elemento `li` para representar el comentario
  const comentario = document.createElement('li');

  // Se agrega el comentario al elemento `li`
  comentario.textContent = input_comment.value;

  // Se agrega el elemento `li` a la lista de comentarios
  listaComentarios.appendChild(comentario);

  // Se limpia el campo de entrada de comentario
  input_comment.value = '';

  // Se deshabilita el botón de comentar hasta que el usuario ingrese un comentario
  botonComentarios.disabled = true;

  // Llamamos a la función guardar para mostrar un mensaje de éxito

}

// Se escucha el evento `input` en el campo de entrada de comentario
input_comment.addEventListener('input', () => {
  // Se habilita el botón de comentar si el usuario ha ingresado un comentario
  botonComentarios.disabled = input_comment.value.length === 0;
});

// Se modifica la función guardar para mostrar un mensaje cuando se realiza un comentario
function guardar() {
  swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Comentario realizado',
    showConfirmButton: false,
    timer: 1500,
  });
}

