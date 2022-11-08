const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')


const asignarBtn = document.querySelector('.asignarButton');

const addName = document.querySelector(".newTask")


const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'))
const getUser = JSON.parse(localStorage.getItem('usuarios'))
const arrayDivs = [];
const listasDb = localStorage.getItem('usuarios')


//cerrar  sesion

const loggedUser = localStorage.getItem("usuarioLogeado");

isLogged = (loggedUser) ? JSON.parse(loggedUser) : true;

const exitBtn = document.querySelector('#cerrar-sesion')
exitBtn.onclick = function() {

    if(isLogged){
       
        
       
        
        localStorage.removeItem("usuarioLogeado");
         location.assign("../../Landing Page/inicio.html");
        console.log("Hola")

    }
    
}


//sacar si es trabajador o admin

const userLog = JSON.parse(localStorage.getItem("usuarioLogeado"))
const user = document.querySelector(".user")

const tipo = userLog.rol


user.append(`Hola, buenas, ${tipo}`)


if (tipo === "trabajador") {
    asignarBtn.style.display = "none";
    btn.style.display = "none";
    input.style.display = "none";
} else {
    asignarBtn.style.display = "inline";
    btn.style.display = "inline";
    input.style.display = "inline";
}
