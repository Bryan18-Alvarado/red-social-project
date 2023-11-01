let users = []; // Lista de usuarios

const data = { // Objeto usuarios
  username: "",
  password: ""
};


const datausers = document.querySelector("#datausers"), // Formulario
  usernameInput = document.querySelector("#username"),
  passwordInput = document.querySelector("#password"),
  visible = document.querySelector("#visible"),
  reset = document.querySelector("#reset");

submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir el envío del formulario

  const inputUsername = usernameInput.value;
  const inputPassword = passwordInput.value;


  // Obtener los datos del usuario del almacenamiento local
const user = JSON.parse(localStorage.getItem('user'));


  if (user.username === inputUsername) {
    // Usuario encontrado, verificar contraseña
    if (user.password === inputPassword) {
      // Contraseña correcta, iniciar sesión
      alert("Inicio de sesión exitoso");
      window.location.href = "index.html"; // Redirigir a la página de inicio de sesión
    } else {
      alert("Contraseña incorrecta");
    }
  } else {
    alert("Usuario no encontrado");
  }
});

reset.addEventListener("click", (e) => {
  if (passwordInput.value !== "" && usernameInput.value !== "") {
    e.preventDefault();
    data.username = usernameInput.value;
    data.password = passwordInput.value;

    // Guardar los datos del usuario en el almacenamiento local
    localStorage.setItem('user', JSON.stringify(data));

    alert("Registrado, ahora puedes iniciar sesión.");
    users.push({ ...data }); // Agrega el usuario a la lista
    window.location.href = "index.html";
  } else {
    alert("Es necesario llenar todos los campos.");
  }
});

visible.addEventListener("change", (e) => {
  if (e.target === visible) {
    if (visible.checked === false) {
      passwordInput.type = "password";
    } else {
      passwordInput.type = "text";
    }
  }
});

function adduser() {
  // Guardar los datos del usuario en el almacenamiento local
  localStorage.setItem('user', JSON.stringify(data));

  // Redirigir al usuario al index.html
  window.location.href = 'index.html';
}

function limpiarObjet() {
  data.username = '';
  data.password = '';
}
