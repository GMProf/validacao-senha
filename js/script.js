const alertFieldPass = document.getElementById('passHelp')

function messageErr(){
    alertFieldPass.style.color = 'red' 
    alertFieldPass.innerText = 'Sua senha deve conter de no mínimo 8 caracteres, variando de números, letras maiúsculas e minúsculas e símbolos.'
}

function messageSuccess(){
    alertFieldPass.style.color = 'green' 
    alertFieldPass.innerText = 'Sucesso!'
}

function verifyPassword(password) {
    if (
        password.length < 8 || 
        !password.match(/[a-z]/) || 
        !password.match(/[A-Z]/) || 
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
       messageErr()
    } else{
       messageSuccess()
    }
}

document.getElementById('btn-enter').addEventListener('click', function(ev){
    ev.preventDefault()
    const validation = document.getElementById('floatingPassword').value
    verifyPassword(validation)
}) 

