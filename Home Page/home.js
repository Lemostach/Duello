<<<<<<< HEAD
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
=======
// usuario;
// const user = document.querySelector(".user")
// user.innerHTML.valueOf(usuario)

// document.getElementById("cerrar-sesion").onclick = function() {
//     localStorage.setItem("usuarioLogeado", "");
// }
>>>>>>> 28e59c9ddc1c53e0257d9cb517a1cc758ca37204

   



    



