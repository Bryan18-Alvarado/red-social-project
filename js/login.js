let users = []; // Lista de estudiantes

const data = { // Objeto estudiante
  username: "",
  password: "",
  seguido: false  // Inicialmente, el usuario no está siendo seguido

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
  const usersData = JSON.parse(localStorage.getItem('users')) || [];

  const user = usersData.find(u => u.username === inputUsername);

  if (user.username === inputUsername) {
    // Usuario encontrado, verificar contraseña
    if (user.password === inputPassword) {
      // Contraseña correcta, iniciar sesión
      alert("Inicio de sesión exitoso");
      window.location.href = "vista.html"; // Redirigir a la página de inicio de sesión
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

    // Obtener los datos existentes del almacenamiento local
    const usersData = JSON.parse(localStorage.getItem('users')) || [];

    // Agregar el nuevo usuario a la lista
    usersData.push({ ...data });

    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem('users', JSON.stringify(usersData));

    alert("Registrado, ahora puedes iniciar sesión.");
    window.location.href = "vista.html";
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


