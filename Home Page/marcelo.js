const addList = document.querySelector(".addList")
const form1 = document.querySelector(".form1")
const form2 = document.querySelector(".form2")
const form3 = document.querySelector(".form3")
const form4 = document.querySelector(".form4")
// const add = addList.addEventListener("click", )
const input = document.querySelector(".nombreLista")
const arrayForms = [form1, form2, form3, form4]


for (let index = 0; index < arrayForms.length; index++) {
    addList.addEventListener("click", showform())
    
}

function showform(form){
    form.style.display = "grid"
}
