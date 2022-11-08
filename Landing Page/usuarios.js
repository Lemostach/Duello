const usuarios = [
    {email: "usuario1@duello.com", password: "usuario1", rol: "trabajador", jefe: {email: "usuario11@duello.com", password: "usuario11", rol: "admin"}},
    {email: "usuario2@duello.com", password: "usuario2", rol: "trabajador", jefe: {email: "usuario11@duello.com", password: "usuario11", rol: "admin"}},
    {email: "usuario3@duello.com", password: "usuario3", rol: "trabajador", jefe: {email: "usuario11@duello.com", password: "usuario11", rol: "admin"}},
    {email: "usuario4@duello.com", password: "usuario4", rol: "trabajador", jefe: {email: "usuario12@duello.com", password: "usuario12", rol: "admin"}},
    {email: "usuario5@duello.com", password: "usuario5", rol: "trabajador", jefe: {email: "usuario12@duello.com", password: "usuario12", rol: "admin"}},
    {email: "usuario6@duello.com", password: "usuario6", rol: "trabajador", jefe: {email: "usuario12@duello.com", password: "usuario12", rol: "admin"}},
    {email: "usuario7@duello.com", password: "usuario7", rol: "trabajador", jefe: {email: "usuario13@duello.com", password: "usuario13", rol: "admin"}},
    {email: "usuario8@duello.com", password: "usuario8", rol: "trabajador", jefe: {email: "usuario13@duello.com", password: "usuario13", rol: "admin"}},
    {email: "usuario9@duello.com", password: "usuario9", rol: "trabajador", jefe: {email: "usuario13@duello.com", password: "usuario13", rol: "admin"}},
    {email: "usuario10@duello.com", password: "usuario10", rol: "trabajador", jefe: {email: "usuario13@duello.com", password: "usuario13", rol: "admin"}},
    


    {email: "usuario11@duello.com", password: "usuario11", rol: "admin", listas: []},
    {email: "usuario12@duello.com", password: "usuario12", rol: "admin", listas: []},
    {email: "usuario13@duello.com", password: "usuario13", rol: "admin", listas: []},
]
const usuarioLogeado = localStorage.getItem("usuarioLogeado");

const loggedUser = localStorage.getItem("usuarioLogeado");

const isLogged = (loggedUser) ? JSON.parse(loggedUser) : false;

console.log(isLogged)

/* localStorage.setItem("usuarios", JSON.stringify(usuarios));

 */

if (isLogged) {
   location.assign("../Home%20Page/home.html");
     
}


document.getElementById("deslogear").onclick = function() {
    localStorage.setItem("usuarioLogeado", "");

}

const allUsers = JSON.parse(localStorage.getItem("usuarios"));

/* all.find((tablon) => { console.log(tablon.jefe)
    }); */
        
        

      
console.log(usuarioLogeado);

console.log(allUsers)
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const loginBtn = document.querySelector('#login')

loginBtn.onclick = function(e) {  e.preventDefault()    

    const currentUser = allUsers.find(user => user.email === email.value && user.password === password.value)
    
    if (currentUser) {
            

                 const usuarioLogeado = localStorage.setItem("usuarioLogeado", JSON.stringify(currentUser));

                 location.assign("../Home%20Page/home.html");
            
            }else {
                console.log("NO HAY USER")
            }

    
            
        }


console.log(tipo)