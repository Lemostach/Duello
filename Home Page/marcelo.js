const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')

const asignarBtn = document.querySelector('.asignarButton');

const addName = document.querySelector(".newTask")
const addButton = document.querySelector(".addButton")

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
    list.innerHTML = `<p class='nombre-tarea'>${input.value}</p> <div class='addTask'>Añadir tarea</div>`
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
