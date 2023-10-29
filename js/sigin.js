let users =[]; //lista de estudiantes

const data = { //objetestudiante
    username: '',
    password:''
        };


let editando =false;

const datausers = document.querySelector('#datausers'), //formulario
    usernameInput = document.querySelector("#username"),
    passwordInput = document.querySelector("#password"),
    visible = document.querySelector("#visible"),
    reset = document.querySelector("#reset");

    document.addEventListener("click", (e) => {
        if (e.target === submit) {
            e.preventDefault();
            data.username = usernameInput.value;
            data.password = passwordInput.value;
    
            if (passwordInput.value !== "" && usernameInput.value !== "") {
                if (passwordInput.value === data.password && usernameInput.value === data.username) {
                    window.location.href = "index.html";
                    alert("Inicio de sesión exitoso");
                } else {
                    alert("Datos incorrectos");
                }
            } else {
                alert("Datos sin llenar");
            }
        }
    });
    


    document.addEventListener("click",(e) =>{
        if (e.target ===reset ){
                window.location.href = "login.html"
                
            }
        })

    document.addEventListener("change", (e) => {
            if (e.target === visible) {
                if (visible.checked === false) {
                    passwordInput.type = "password";
                } else {
                    passwordInput.type = "text";
                }
            }
        });
        


    datausers.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    
        // Obtiene los valores de los campos de entrada y los almacena en el objeto 'data'
        data.username = usernameInput.value;
        data.password = passwordInput.value;
    })
    
function adduser(){
        users.push({...data});
    
        datausers.reset();
    
        limpiarObjet();
    
    }
    
function limpiarObjet(){
        limpiarObjet.username = '';
        limpiarObjet.password = '';
    }
    
    
    