

/* cerrar sesión */

const loggedUser = localStorage.getItem("usuarioLogeado");

isLogged = (loggedUser) ? JSON.parse(loggedUser) : true;

const exitBtn = document.querySelector('#cerrar-sesion')
exitBtn.onclick = function() {

    if(isLogged){
       
        
       
        
        localStorage.removeItem("usuarioLogeado");
        location.assign("../Landing Page/inicio.html");
        console.log("Hola")

    }
    
}








    



