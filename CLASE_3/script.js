// division(10, 2)
// function division(dato1, dato2){
//     let resultado = parseInt(dato1 / dato2);
//     alert('El resultado de dividir '+ dato1 + ' entre ' + dato2 + ' es igual a ' + resultado)
// }

// areaRectangulo(5, 3)
// function areaRectangulo(base, altura){
//     let resultado = parseFloat(base * altura)
//     alert('El rectángulo de base ' + base + ' y altura ' + altura + ' tiene un área de: ' + resultado)
// }

// let prompt1 = parseInt(prompt('Ingresa la cantidad de minutos que quieres convertir en segundos: '))
// minutosEnSegundos(prompt1)
// function minutosEnSegundos(minutos){
//     let resultado =  minutos * 60;
//     alert('Serían ' + resultado + ' segundos')
// }

// let prompt2 = parseInt(prompt('Ingresa tu edad para convertir en días: '))
// edadEnDias(prompt2)
// function edadEnDias(edad){
//     let resultado = edad * 365;
//     alert('Tu edad en días sería: ' + resultado)
// }





/////
// let numeros = []
// for (let i = 0; i < 10; i++) {
//     numeros.push(aleatorio(1,100))
// }

// function aleatorio(min, max) {
//     return Math.floor( Math.random() * (max - min + 1) + min)
// }
// console.log(numeros)
//////

// let array1 = []
// let lista = prompt("Ingresa datos separados por coma (,): ")
// array1 = lista.split(',')
// console.log(array1)
// // //////

// const array2 = [10,40,30,20,15,5]
// array2.sort((a, b) => a - b);

// const numMayor = Math.max(...array2)
// const numMenor = Math.min(...array2)

// console.log(array2)
// console.log(numMayor)
// console.log(numMenor)
// /////



// let contador = 1;
// let limite = prompt('Dame un numero:')

// while(contador <= limite){
//     let multiplo = contador * 5
//     console.log(multiplo)
//     contador++
// }

///////



// let contador = 1;

// while(contador <= 50){
//     if(contador == 50){
//         console.log(`${contador} Loteria`)
//     }else{
//         console.log(contador)
//     }
//     contador++
// }
////



// let numero1 = prompt('Ingresa un numero entre 1 y 50:')
// let numero2 = prompt('Ingresa otro numero entre 1 y 50:')
// let contador = 1

// while(contador <= 50){
//     if(contador == numero1 ||contador == numero2){
//         console.log(`${contador} Loteria!`)
//     }else{
//         console.log(contador)
//     }
//     contador++
// }
///////

// let arreglo = []


// let numero = prompt('Ingresa un número:')



// function colorBackground(boton){
//     const body = document.querySelector('body')
//     if(boton == 'rojo'){
//         body.style.backgroundColor = 'red'
//     }else if(boton == 'blanco'){
//         body.style.backgroundColor = 'white'
//     }else if(boton == 'verde'){
//         body.style.backgroundColor = 'green'
//     }
// }


function promedio(){
    let calif1 = document.getElementById('calificacion1').value;
    let calif2 = document.getElementById('calificacion2').value;
    let calif3 = document.getElementById('calificacion3').value;
    let calif4 = document.getElementById('calificacion4').value;
    let calif5 = document.getElementById('calificacion5').value;
    // if(calif1.trim()){

    // }
    let resultadoSum = parseFloat(calif1) + parseFloat(calif2) + parseFloat(calif3) + parseFloat(calif4) + parseFloat(calif5);

    let resultadoProm = resultadoSum / 5;

    function mensaje(texto){
        let parrafo = document.createElement('p')
        let msjs = document.getElementById('msj')
        parrafo.textContent = texto

        msjs.appendChild(parrafo)
    }

    mensaje(`El promedio es de ${resultadoProm}`)

    if(resultadoProm <= 5){
        mensaje(`Echale ganas`)
    }else if(resultadoProm > 5 || resultadoProm < 8 ){
        mensaje(`Puedes esforzarte más`)
    }else if(resultadoProm >= 8 || resultadoProm < 10 ){
        mensaje(`Casi glorioso`)
    }else if(resultadoProm == 10){
        mensaje(`Eres un crack`)
    }

}

