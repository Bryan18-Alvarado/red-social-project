let users =[]; //lista de usuarios

const data = { //objetusers
    username: '',
    password:''
        };


let editando =false;

const datausers = document.querySelector('#datausers'), //
    submit = document.querySelector('#submit'),
    usernameInput = document.querySelector("#username"),
    passwordInput = document.querySelector("#password"),
    visible = document.querySelector("#visible"),
    reset = document.querySelector("#reset");



       
    document.addEventListener("change", (e) =>{
        if (e.target ===visible){
            if(visible.checked === false)passwordInput.type ="password";
            else passwordInput.type = "text";
        }
    })


    document.addEventListener("click",(e) =>{
        if (e.target ===reset ){
            if(passwordInput.value !== "" && usernameInput.value !== "" ){
                e.preventDefault();
                alert("registrado, ahora puedes iniciar sesion")
                window.location.href= "sigin.html"

            }else {
                alert("Es necesario llenar todos los campos")
            }
        }


 
function adduser(){
        users.push({...data});
    
        datausers.reset();
}
}
)
