

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


// const addName = document.querySelector(".newTask")


// const task = document.createElement("div")
//     forms.appendChild(list)
    
//     task.innerHTML = `<p>${input.value}</p> <div class='taskName'>${addName}</div>`






    



