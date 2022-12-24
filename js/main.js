const d           = document
const btnPiedra   = d.querySelector('#btn-piedra')   
const btnPapel    = d.querySelector('#btn-papel')   
const btnTijera   = d.querySelector('#btn-tijera') 
const form        = d.querySelector('form')
const instruccion = d.querySelector('#instruccion')
const enviar      = d.querySelector('#enviar')  
const nombre      = d.querySelector('#nombre')
const email       = d.querySelector('#email')
const juego       = d.querySelector('#juego')
const resultados  = d.querySelector('#resultados')
const table       = d.querySelector('#table')
const elegidoUsuario = d.querySelector('#elegido-usuario')
const imgElegidoUsuario = d.querySelector('#img-elegido-usuario')
const elegidoMaquina = d.querySelector('#elegido-maquina')
const imgElegidoMaquina = d.querySelector('#img-elegido-maquina')
const resultadoFinal    = d.querySelector('#resultado-final')
const contadorUsuario = d.querySelector('#contador-usuario')
const contadorMaquina = d.querySelector('#contador-maquina')
let usuario       = d.querySelector('#usuario')
let victoriasUsuario = 0
let victoriasMaquina = 0

const iniciar = () => {
    nombre.addEventListener('input', validacion, false)
    email.addEventListener('input', validacion, false)
    validacion()
}

const validacion = () => {
    if (nombre.value == '' || email.value == '') {
        email.setCustomValidity('Por favor ingresá ambos campos')
    } else {
        email.setCustomValidity('')
        enviar.addEventListener('click', (e) => {
            renderElementos(e)
        })
    }
}

const elementosRandom = () => {
    let random = Math.round(Math.random()*2)
    return random
}

const renderElementos = (e) => {
    e.preventDefault()
    usuario.textContent   = nombre.value
    juego.className       = 'row my-4 d-block'
    form.className        = 'd-none'
    instruccion.className = 'd-none'
}

const resultado = (elemento, elemento2) => {
    if (elemento.id == '1') {
        switch (elemento2.id) {
            case '1':
                resultadoFinal.textContent = 'Empate'
                console.log('Empate')
                break;
            case '2':
                resultadoFinal.textContent = 'Perdiste'
                victoriasMaquina +=1
                console.log('Pierde el usuario.')
                break;    
            case '3':
                resultadoFinal.textContent = 'Ganaste'
                console.log('Gana el usuario.')
                victoriasUsuario +=1
                break;
        }
    } else if (elemento.id == '2') {
        switch (elemento2.id) {
            case '1':
                resultadoFinal.textContent = 'Ganaste'
                victoriasUsuario +=1
                console.log('Gana el usuario.')
                break;
            case '2':
                resultadoFinal.textContent = 'Empate'
                console.log('Empate')
                break;    
            case '3':
                resultadoFinal.textContent = 'Perdiste'
                console.log('Pierde el usuario.')
                victoriasMaquina +=1
                break;
        }
    } else {
        switch (elemento2.id) {
            case '1':
                resultadoFinal.textContent = 'Perdiste'
                console.log('Pierde el usuario.')
                victoriasMaquina +=1
                break;
            case '2':
                resultadoFinal.textContent = 'Ganaste'
                console.log('Gana el usuario.')
                victoriasUsuario +=1
                break;    
            case '3':
                resultadoFinal.textContent = 'Empate'
                console.log('Empate.')
                break;
        }
    }
}

const renderResultados = (elemento, elemento2) => {
    console.log(`Usuario: ${elemento.nombre}, máquina: ${elemento2.nombre}`)
    resultados.className        = 'row my-4 d-block'
    table.className             = 'table table-dark table-striped d-table'
    elegidoUsuario.textContent  = `Elegiste: ${elemento.nombre}`
    imgElegidoUsuario.src       = `${elemento.urlImage}`
    imgElegidoUsuario.alt       = elemento.nombre
    elegidoMaquina.textContent  = `La máquina eligió: ${elemento2.nombre}`
    imgElegidoMaquina.src       = `${elemento2.urlImage}`
    imgElegidoMaquina.alt       = elemento2.nombre
    resultado(elemento, elemento2)
    contadorUsuario.textContent = victoriasUsuario
    contadorMaquina.textContent = victoriasMaquina
}

btnPiedra.addEventListener('click', () => {
    elementoMaquina = elementosRandom()
    renderResultados(elementos[0], elementos[elementoMaquina])
})

btnPapel.addEventListener('click', () => {
    elementoMaquina = elementosRandom()
    renderResultados(elementos[1], elementos[elementoMaquina])
})

btnTijera.addEventListener('click', () => {
    elementoMaquina = elementosRandom()
    renderResultados(elementos[2], elementos[elementoMaquina])
})

window.addEventListener('load', iniciar, false)