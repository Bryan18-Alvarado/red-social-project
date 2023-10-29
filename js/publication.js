const listaPublicaciones = document.getElementById('lista_publicaciones');
const input = document.getElementById('input_descripcion');
const botonCrearPublicacion = document.getElementById('btnCrearPublicacion');
const botonPublicar = document.getElementById('btnPublicar') 


 //funcionalidad de los botones crear publicacion y publicar ademas del input descripcion
botonPublicar.addEventListener('click', onClickAdd);

function onClickAdd() {
  // Se crea un elemento `li` para representar la publicación
  const publicacion = document.createElement('li');

  // Se agrega la descripción de la publicación al elemento `li`
  publicacion.textContent = input.value;

  // Se agrega el elemento `li` a la lista de publicaciones
  listaPublicaciones.appendChild(publicacion);

  // Se limpia el campo de entrada de descripción
  input.value = '';

  // Se deshabilita el botón de publicar hasta que el usuario ingrese una descripción
  botonPublicar.disabled = true;
}

// Se escucha el evento `input` en el campo de entrada de descripción
input.addEventListener('input', () => {
  // Se habilita el botón de publicar si el usuario ha ingresado una descripción
  botonPublicar.disabled = input.value.length === 0;
});

function onTypeList() {
    botonCrearPublicacion.disabled = input.value.legth ===0;
}

function guardar(){
    swal.fire({
        position: 'center',
        icon:'success',
        title:'Hecho',
        showConfirmButton: false,
        timer: 1500,
    })
}

botonCrearPublicacion.addEventListener('click', () => {
    // Se obtiene el elemento `div` que contiene la vista actual
    const divActual = document.querySelector('#home');
  
    // Se obtiene el elemento `div` que contiene la vista nueva
    const divNueva = document.querySelector('#crearPublicacion');
  
    // Se reemplaza la vista actual con la vista nueva
    divActual.replaceWith(divNueva);
  });


