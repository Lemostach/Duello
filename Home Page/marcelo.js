const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')


const asignarBtn = document.querySelector('.asignarButton');

const addName = document.querySelector(".newTask")
const descripcion = document.querySelector('.descripcion')

const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'))
const getUser = JSON.parse(localStorage.getItem('usuarios'))
const arrayDivs = [];


const todosUsuarios = JSON.parse(localStorage.getItem('usuarios'))


const jefeTablero = (usuarioLogeado.rol === "admin") ? usuarioLogeado : usuarioLogeado.jefe


if(todosUsuarios){

    todosUsuarios.forEach(user => {

        if(jefeTablero.email === user.email){

            if (user.listas) {
                if(user.listas.length >= 4){
                    btn.disabled = true;
                }
              
                user.listas.forEach(lista => {
                    
                 
                    const list = document.createElement("div")
                    forms.appendChild(list)
                    list.className = 'list'

                    list.innerHTML += `<p class='nombre-tarea'>${lista.nombre}</p><div class='addTask'>Añadir tarea</div>`

                    for(let i = 0; i < lista.tareas.length; i++){

                        
                        
                        list.innerHTML += `<div class='task'>${lista.tareas[i].nombre}</div>`
                    }
                    
    
                    


                });

            }
        }
    })


btn.onclick = (e) => {
    e.preventDefault()

    let nuevaLista = { nombre: input.value, tareas: [] }

    getUser.forEach(user => {
        if (usuarioLogeado.email === user.email) {
            user.listas.push(nuevaLista)
            
        }
    })


        
    localStorage.setItem('usuarios', JSON.stringify(getUser))

    const list = document.createElement("div")
    forms.appendChild(list)
    list.className = 'list'
    list.innerHTML = `<p class='nombre-tarea'>${input.value}</p> <div class='addTask'>Añadir tarea</div> `
    input.value = ''

    arrayDivs.push(list);
    if (arrayDivs.length >= 4) {
        btn.disabled = true;
    }
    document.querySelectorAll('.addTask').forEach((element,index )=> {
        element.addEventListener('click', (e) => {
            if (!e.target.classList.contains("addTask")) return
    
            const target = e.target
    
localStorage.setItem('position', JSON.stringify(index))

           
            localStorage.setItem('objetivo', target)
    
            visor.style.display = 'flex'
        })
    });
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





// cambiar nombre tarea desde el visualizador
document.querySelector(".addButton").onclick = (e) => {
    e.preventDefault()
    
    let pos = JSON.parse(localStorage.getItem('position'))
    const currentUser = JSON.parse(localStorage.getItem('usuarios'))
    const newTask = {nombre: addName.value, descripcion: descripcion.value, asignada: null, archivada: false}
    currentUser.forEach(user => {
        if(usuarioLogeado.email === user.email){
            user.listas[pos].tareas.push(newTask)
            
        }
    })
    
    localStorage.setItem('usuarios', JSON.stringify(currentUser))
    const list = document.querySelectorAll(".list")
    const addTask = document.querySelector(".addTask")
    const divs = document.createElement("div")
    
    list[pos].appendChild(divs)
    divs.className = 'task'
    divs.innerHTML = `<p>${addName.value}</p>`
    visor.style.display = "none"
    addName.value = ''
    descripcion.value = ''
}


document.querySelectorAll('.addTask').forEach((element, index) => {
    
    element.addEventListener('click', (e) => {
       
        if (!e.target.classList.contains("addTask")) return
        const target = e.target

        localStorage.setItem('position', JSON.stringify(index))

        localStorage.setItem('objetivo', target)
        visor.style.display = 'flex'
    })
})}

const task = document.querySelectorAll('.task')

task.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        const users = JSON.parse(localStorage.getItem('usuarios'))
        // if (!e.target.classList.contains("addTask")) return
        const target = e.target;
        localStorage.setItem('position', JSON.stringify(index))
        // localStorage.setItem('objetivo', target)
        
        visor.style.display = 'flex'
        
        
    
    users.forEach(user => {
        let pos = JSON.parse(localStorage.getItem('position'))
        if(usuarioLogeado.email === user.email)
        // user.listas.forEach(lista => {
            addName.value = user.listas[pos].tareas[pos].nombre
             descripcion.value = user.listas[pos].tareas[pos].descripcion
                
        // })
        })
        })
    })



    




