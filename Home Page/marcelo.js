const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')

const arrayDivs = [];
const listasDb = localStorage.getItem('listas')

if(listasDb){
    const listObj = JSON.parse(listasDb)
    listObj.forEach(lista => {
    const list = document.createElement("div")
    forms.appendChild(list)
    list.className = 'list'
    list.innerHTML = `<p>${lista.nombre}</p> <div class='addTask'>Añadir tarea</div>`

    arrayDivs.push(list);
    if(listObj >= 4){
        btn.disabled = true;
    }
    });

    forms.addEventListener('click', (e) => {
        if(!e.target.classList.contains("addTask")) return

        
        visor.style.display = 'flex'
        })
    
}





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
    if(listObj >= 4){
        btn.disabled = true;
    }
    
 
    
    forms.addEventListener('click', (e) => {
        if(!e.target.classList.contains("addTask")) return

        
        visor.style.display = 'flex'
        })



   
}


//sacar si es trabajador o admin

const userLog = JSON.parse(localStorage.getItem("usuarioLogeado"))
const user = document.querySelector(".user")

const tipo = userLog[0].rol


user.append(`Hola, buenas ${tipo}`)
