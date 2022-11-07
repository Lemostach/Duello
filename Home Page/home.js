/* 
const user = document.querySelector(".user")
Nombre del usuario */
const userLog = JSON.parse(localStorage.getItem("usuarioLogeado"))
   
email = userLog[0].email

/* cerrar sesión */

const loggedUser = localStorage.getItem("usuarioLogeado");

isLogged = (loggedUser) ? JSON.parse(loggedUser) : true;

const exitBtn = document.querySelector('#cerrar-sesion')
exitBtn.onclick = function() {

    if(isLogged){
        isLogged=!isLogged
        localStorage.clear()
       
        location.assign("../Landing Page/inicio.html");
        console.log("Hola")

    }


    
}

   



    



