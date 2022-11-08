const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')
const asignarBtn = document.querySelector('.asignarButton');

const addName = document.querySelector(".newTask")



const arrayDivs = [];


const listas = [
    {
        nombre: '',
        tareas: ''
    }
]


btn.onclick = (e) => {
    e.preventDefault()

    let nuevaLista = { nombre: input.value, tareas: 'tarea' }
    if (JSON.parse(localStorage.getItem('listas')) === null) {
        listas.shift()
        listas.push(nuevaLista)
        localStorage.setItem('listas', JSON.stringify(listas))
    } else {
        listas.push(nuevaLista)
        localStorage.setItem('listas', JSON.stringify(listas))
    }


    const list = document.createElement("div")
    forms.appendChild(list)
    list.className = 'list'
    list.innerHTML = `<p>${input.value}</p> <div class='addTask'>Añadir tarea</div>`
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

            console.log(document.querySelectorAll('.addTask'))
            localStorage.setItem('objetivo', target)
    
            visor.style.display = 'flex'
        })
    });

    
    

}


//sacar si es trabajador o admin

const userLog = JSON.parse(localStorage.getItem("usuarioLogeado"))
const user = document.querySelector(".user")

const tipo = userLog[0].rol


user.append(`Hola, buenas ${tipo}`)


if (tipo === "trabajador") {
    asignarBtn.style.display = "none";
    btn.style.display = "none";
    input.style.display = "none";
} else {
    asignarBtn.style.display = "inline";
    btn.style.display = "inline";
    input.style.display = "inline";
}





// cambiar nombre tarea desde el visualizador y añadir esa tarea


document.querySelector(".addButton").onclick = (e) => {
    e.preventDefault()

    const list = document.querySelectorAll(".list")
    const addTask = document.querySelector(".addTask")
    const divs = document.createElement("div")
    let pos= JSON.parse(localStorage.getItem('position'))

    list[pos].appendChild(divs)
    divs.className = 'task'
    divs.innerHTML = `<p>${addName.value}</p>`


}