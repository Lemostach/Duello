const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')


const asignarBtn = document.querySelector('.asignarButton');

const addName = document.querySelector(".newTask")
const addButton = document.querySelector(".addButton")

const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'))
const getUser = JSON.parse(localStorage.getItem('usuarios'))

 
const arrayDivs = [];
const listasDb = localStorage.getItem('usuarios')



if(listasDb){
    getUser.forEach(user => {
        if(usuarioLogeado.email === user.email){
            
            if(user.listas.length >= 4){
                btn.disabled = true;
            }
        
            user.listas.forEach(lista => {
            const list = document.createElement("div")
            forms.appendChild(list)
            list.className = 'list'
            list.innerHTML = `<p class='nombre-tarea'>${lista.nombre}</p><div class='addTask'>Añadir tarea</div> <button class='eliminar-lista'>Eliminar lista</button>`
        
            
        });
        }
    })
   
   

    forms.addEventListener('click', (e) => {
        if(!e.target.classList.contains("addTask")) return

        
        visor.style.display = 'flex'
        })
    
}


btn.onclick = (e) => {
    e.preventDefault()
    
    let nuevaLista = {nombre: input.value, tareas: 'tarea'}
    
    getUser.forEach(user => {
        if(usuarioLogeado.email === user.email){
            user.listas.push(nuevaLista)
            console.log(user.listas)
        }
    })

       
        
       localStorage.setItem('usuarios', JSON.stringify(getUser))
       
    const list = document.createElement("div")
    forms.appendChild(list)
    list.className = 'list'
    list.innerHTML = `<p class='nombre-tarea'>${input.value}</p> <div class='addTask'>Añadir tarea</div> <button class='eliminar-lista'>Eliminar lista</button>`
    input.value = ''
    
    arrayDivs.push(list);
    if (arrayDivs.length >= 4) {
        btn.disabled = true;
    }


    forms.addEventListener('click', (e) => {
        if (!e.target.classList.contains("addTask")) return


        visor.style.display = 'flex'
    })

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
// const addTask = document.querySelector(".addTask")

// function addTaskName(){
//     const divs = document.createElement("div")
//     forms.appendChild(divs)
//     divs.className = 'changeTaskName'
//     divs.innerHTML = `<p>${addName.value}</p>`

// }


document.querySelector(".addButton").onclick = (e) => {
    e.preventDefault()
    const list = document.querySelector(".list")
    const addTask = document.querySelector(".addTask")
    const divs = document.createElement("div")
    
    list.appendChild(divs)
    divs.className = 'changeTaskName'
    divs.innerHTML = `<p>${addName.value}</p>`

}
