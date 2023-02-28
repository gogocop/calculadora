var Mousetrap = require('mousetrap');

var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonSuma = document.getElementById('botonSuma')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')
var botonResta = document.getElementById('botonResta')
var botonMulti = document.getElementById('botonMulti')
var botonDivision = document.getElementById('botonDivision')
var botonDel = document.getElementById('botonDel')
var botonClearD = document.getElementById('botonClearD')

var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')



botonUno.addEventListener('click', clickUno)
botonDos.addEventListener('click', clickDos)
botonSuma.addEventListener('click', clickSuma)
botonTres.addEventListener('click', clickTres)
botonCuatro.addEventListener('click', clickCuatro)
botonCinco.addEventListener('click', clickCinco)
botonSeis.addEventListener('click', clickSeis)
botonSiete.addEventListener('click', clickSiete)
botonOcho.addEventListener('click', clickOcho)
botonNueve.addEventListener('click', clickNueve)
botonCero.addEventListener('click', clickCero)
botonResta.addEventListener('click', clickResta)
botonMulti.addEventListener('click', clickMulti)
botonDivision.addEventListener('click', clickDivision)
botonDel.addEventListener('click', clickDel)
botonClearD.addEventListener('click', clickClearD)


Mousetrap.bind('1', clickUno)
Mousetrap.bind('2', clickDos)
Mousetrap.bind('3', clickTres)
Mousetrap.bind('4', clickCuatro)
Mousetrap.bind('5', clickCinco)
Mousetrap.bind('6', clickSeis)
Mousetrap.bind('7', clickSiete)
Mousetrap.bind('8', clickOcho)
Mousetrap.bind('9', clickNueve)
Mousetrap.bind('0', clickCero)
Mousetrap.bind('*', clickMulti)
Mousetrap.bind('-', clickResta)
Mousetrap.bind('/', clickDivision)
Mousetrap.bind('+', clickSuma)
Mousetrap.bind('C', clickClearD)
Mousetrap.bind('Delete', clickDel)

function clickClearD(){
    actual.innerHTML='0'
    resultado.innerHTML='0'
}

function clickDel(){
    if (actual.innerHTML > '0'){
    var resultadodel = actual.innerHTML.slice(0,-1)
    actual.innerHTML = resultadodel
    } else {
        actual.innerHTML = '0'  
    }
}

function clickUno(){
    actual.innerHTML+='1'
}

function clickDos(){
    actual.innerHTML+='2'
}

function clickTres(){
    actual.innerHTML+='3'
}

function clickCuatro(){
    actual.innerHTML+='4'
}

function clickCinco(){
    actual.innerHTML+='5'
}
            
function clickSeis(){
    actual.innerHTML+='6'
}
        
function clickSiete(){
    actual.innerHTML+='7'
}

function clickOcho(){
    actual.innerHTML+='8'
}

function clickNueve(){
    actual.innerHTML+='9'
}

function clickCero(){
    actual.innerHTML+='0'
    
}

function clickMulti(){
    if (resultado.innerHTML == '0' || actual.innerHTML == '0') {
        resultado.innerHTML = parseInt(actual.innerHTML)
        actual.innerHTML = '0'
        } else {
        let valorActual1 = parseInt(actual.innerHTML)
        let valorResultado1 = parseInt(resultado.innerHTML)
        resultado.innerHTML = valorResultado1*valorActual1
        actual.innerHTML = '0'
}}

function clickDivision(){
    if (resultado.innerHTML == '0' || actual.innerHTML == '0') {
        resultado.innerHTML = parseInt(actual.innerHTML)
        actual.innerHTML = '0'
        } else {
        let valorActual1 = parseInt(actual.innerHTML)
        let valorResultado1 = parseInt(resultado.innerHTML)
        resultado.innerHTML = valorResultado1/valorActual1
}}

function clickResta(){
    let valorActual2 = parseInt(actual.innerHTML)
    let valorResultado2 = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual2 - valorResultado2
    actual.innerHTML = '0'
}

function clickSuma(){
    let valorActual3 = parseInt(actual.innerHTML)
    let valorResultado3 = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual3 + valorResultado3
    actual.innerHTML = '0'
}

