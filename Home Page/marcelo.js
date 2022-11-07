const usuarios = [
    {email: "usuario1@duello.com", password: "usuario1", rol: "trabajador"},
    {email: "usuario2@duello.com", password: "usuario2", rol: "trabajador"},
    {email: "usuario3@duello.com", password: "usuario3", rol: "trabajador"},
    {email: "usuario4@duello.com", password: "usuario4", rol: "trabajador"},
    {email: "usuario5@duello.com", password: "usuario5", rol: "trabajador"},
    {email: "usuario6@duello.com", password: "usuario6", rol: "trabajador"},
    {email: "usuario7@duello.com", password: "usuario7", rol: "trabajador"},
    {email: "usuario8@duello.com", password: "usuario8", rol: "trabajador"},
    {email: "usuario9@duello.com", password: "usuario9", rol: "trabajador"},
    {email: "usuario10@duello.com", password: "usuario10", rol: "trabajador"},
    {email: "usuario11@duello.com", password: "usuario11", rol: "admin"},
    {email: "usuario12@duello.com", password: "usuario12", rol: "admin"},
    {email: "usuario13@duello.com", password: "usuario13", rol: "admin"},
]

localStorage.setItem('usuarios', JSON.stringify(usuarios))



const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')
const arrayDivs = [];

const listas = [
    {nombre: '', 
    tareas: ''}
]





btn.onclick = (e) => {
    e.preventDefault()
    
    let nuevaLista = {nombre: input.value, tareas: 'tarea'}
    if(JSON.parse(localStorage.getItem('listas')) === null){
        listas.shift()
        listas.push(nuevaLista)
    localStorage.setItem('listas', JSON.stringify(listas))
    } else{
        listas.push(nuevaLista)
        localStorage.setItem('listas', JSON.stringify(listas))
    }
   
    
    const list = document.createElement("div")
    forms.appendChild(list)
    list.className = 'list'
    list.innerHTML = `<p>${input.value}</p> <div class='addTask'>Añadir tarea</div>`
    input.value = ''

    arrayDivs.push(list);
    if(arrayDivs.length >= 4){
        btn.disabled = true;
    }
    console.log(arrayDivs)

    const addTask = document.querySelector('.addTask')

addTask.addEventListener('click', () => {

    visor.style.display = 'flex'
})
}






