// Base de datos:
// usuario: email, password, rol
// listas: nombre de lista, tareas
// tareas: nombre, descripcion, asignada a, archivada



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
    {email: "usuario11@duello.com", password: "usuario11", rol: "admin", listas: ''},
    {email: "usuario12@duello.com", password: "usuario12", rol: "admin", listas: ''},
    {email: "usuario13@duello.com", password: "usuario13", rol: "admin", listas: ''},
]

const listas = [
    {nombre: '', 
    tareas: ''}
]

const tareas = [
    {nombre: '', 
    descripcion: '', 
    asignada: '', 
    archivada: false}
]


localStorage.setItem('usuarios', JSON.stringify(usuarios))


const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const btn = document.querySelector('button')
const list = document.querySelector('#list')
const add = document.querySelector('#add')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(email.value)
    console.log(pass.value)
})

task.addEventListener('change', () => {
    listas.nombre = list.value;
    listas.tareas = 'tarea'
})

add.addEventListener('click', (e) => {
    e.preventDefault()
    let nuevaLista = {nombre: list.value, tareas: 'tarea'}
    if(JSON.parse(localStorage.getItem('listas')) === null){
        listas.shift()
        listas.push(nuevaLista)
    localStorage.setItem('listas', JSON.stringify(listas))
    } else{
        listas.push(nuevaLista)
        localStorage.setItem('listas', JSON.stringify(listas))
    }
    
})

