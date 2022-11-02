let modoRegistro = false;
const a = document.querySelector('a');
const h3 = document.querySelector('h3');
const p = document.querySelector('p');
const btn = document.querySelector('button')




a.addEventListener('click', () => {
    modoRegistro = !modoRegistro;
    console.log(modoRegistro)

    if(modoRegistro === true){
        h3.innerText = 'Regístrate'
        btn.innerText = 'Crear cuenta'
        p.innerText = '¿Ya tienes cuenta?' 
        a.innerText = 'Inicia sesión'
    } 
    
    if(modoRegistro === false){
        h3.innerText = 'Inicia sesión'
        btn.innerText = 'Iniciar sesión'
        p.innerText = '¿No tienes cuenta?'
        a.innerText = 'Regístrate'
    
    }
    
   
})



