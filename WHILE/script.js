// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
async function inicio(opcion){
    function pausa(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
    }
    function parrafo(texto, contenedor, tipo){
      let parrafo = document.createElement('p')
      let span = document.createElement('span')
      if(tipo == 'parrafo'){
        parrafo.textContent = texto;
        agregarParrafo(parrafo, contenedor)
      }else if(tipo == 'span'){
        span.textContent = texto;
        agregarParrafo(span, contenedor)
      }
    }
    function agregarParrafo(mensaje, contenedor){
      const parrafo = document.querySelectorAll('.parrafo')
      if(contenedor == 'first'){
        parrafo[0].appendChild(mensaje)
      }else if(contenedor == 'second'){
        parrafo[1].appendChild(mensaje)
      }
    }
    function eliminarParrafo(){
      const parrafo = document.querySelectorAll('.parrafo')
      parrafo[0].innerHTML = '';
      parrafo[1].innerHTML = '';
    }
    function resetearInputs() {
      const inputs = document.querySelectorAll('input, select, button');
      inputs.forEach(input => {  
        input.value = input.defaultValue;
        input.checked = false;
        input.disabled = false;
        input.selectedIndex = 0;
      })
    }
    async function deshabilitarConfirmar(botonConfirmar, inputs, tipo){
      return new Promise((resolve, reject) => {
        botonConfirmar.disabled = true;
        if(tipo == 'radio'){
          //inputs, en este caso es el querySelectorAll de los inputs tipo radio, con el mismo 'name'
          inputs.forEach(input => {
            input.addEventListener('change', habilitarConfirmar);
          });
          function habilitarConfirmar(){
            botonConfirmar.disabled = false;
            botonConfirmar.addEventListener('click', postClickBotonConfirmar);
            inputs.forEach(input => {
              input.removeEventListener('change', habilitarConfirmar);
            });
            function postClickBotonConfirmar(){
              botonConfirmar.disabled = true;
              botonConfirmar.removeEventListener('click', postClickBotonConfirmar);
              inputs.forEach(input => {
                input.disabled = true;
              });
              resolve();
            }
          }
        }else if(tipo == 'selector'){
          //inputs, en este caso es el selector
          let opcionSelector = inputs.value
          inputs.addEventListener('change', habilitarConfirmar);
          function habilitarConfirmar(){
            botonConfirmar.disabled = false
            botonConfirmar.addEventListener('click', postClickBotonConfirmar);
            inputs.removeEventListener('change', habilitarConfirmar);

            function postClickBotonConfirmar(){
              opcionSelector = inputs.value
              if(opcionSelector == 'opcion1'){
                alert('No has seleccionado una opción válida')
              }else{
                botonConfirmar.disabled = true;
                botonConfirmar.removeEventListener('click', postClickBotonConfirmar);
                inputs.disabled = true;
                resolve();
              }
            }
          }
        }
      })
    }
    function opcionChecked(inputs){
      //inputs, en este caso es el querySelectorAll de los inputs tipo radio, con el mismo 'name'. Devuelve el value de la opción checkeada.
      let opcionValue = null;
      inputs.forEach(input =>{
        if(input.checked){
          opcionValue = input.value
        }
      })
      return opcionValue
    }
    function EnterInput(e, tipo, input){
      // El parámetro input es el objeto INPUT tipo texto, en la cual el usuario introduce el texto a buscar
      
      if(tipo == 'toppings'){
        let valorIntroducido = parseFloat(input.value);
        if(!isNaN(valorIntroducido) && e.key === 'Enter'){
          alert('No es un valor válido');
        }else if(isNaN(valorIntroducido) && e.key === 'Enter'){
          alert('Lo sentimos, no contamos con ese topping 😥')
          alert('Por favor selecciona alguno de los toppings disponibles')
        }
      }else if (tipo === 'kilometros') {
        if (e.key === 'Enter') {
          let valorIntroducido = parseFloat(input.value);
          if (!isNaN(valorIntroducido)) {
            if(valorIntroducido <= 0){
              alert('No es un valor válido');
            }else{
              return true;
            }
            
          } else if(isNaN(valorIntroducido)) {
            alert('No es un valor válido');
            return false;
          }       
        }
      }
    }
    function verificarIsNaN(input){
      // Devuelve true si es letra y false si es número
      let valorIsNaN = parseFloat(input)
      if(isNaN(valorIsNaN)){
        // ES LETRA
        return true
      }else if(!isNaN(valorIsNaN)){
        // ES NUMERO
        return false
      }
    }
    switch(opcion) {
        case 'opcion1':
          let contador = 1;
          let limite = prompt('Dame un numero:')

          while(contador <= limite){
              let multiplo = contador * 5
              console.log(multiplo)
              contador++
          }
          alert('Revisa la consola')
        break;
        case 'opcion2':
          let numero1 = prompt('Ingresa un numero entre 1 y 50:')
          let numero2 = prompt('Ingresa otro numero entre 1 y 50:')
          let contador2 = 1

          while(contador2 <= 50){
            if(contador2 == numero1 ||contador2 == numero2){
                console.log(`${contador2} Loteria!`)
            }else{
                console.log(contador2)
            }
            contador++
          }
          alert('Revisa la consola')
        break;
        case 'opcion3':
          let arreglo = []
          let numero
          
          while(arreglo.length === 0 || numero !== 0){

            numero = parseInt(prompt('Ingresa un número (introduce 0 para finalizar el ingreso):'))
            if(isNaN(numero)){
              alert('No es un numero')
            }else{
              arreglo.push(numero)
            }
            console.log('let numero ', numero)
            console.log('let arreglo ', arreglo)
          }
        break;
        case 'opcion4':
          let arreglo1 = []
          let letra
          
          while(arreglo1.length === 0 || letra !== ''){
            letra = prompt('Ingresa una letra o palabra (deja en blanco para finalizar el ingreso): ')
            
            if(verificarIsNaN(letra)){
              arreglo1.push(letra)
            }else{
              alert('No es una letra / palabra')
            }
            console.log('let letra ', letra)
            console.log('let arreglo1 ', arreglo1)
          }
          let concatenacion = arreglo1.join('')
          alert(`Concatenación del array: ${concatenacion}`)
          console.log(`Concatenación del array: ${concatenacion}`)
        break;
        case 'opcion5':
          let arreglo2 = []
          let diaSemana
          let diaSemanaLowerCase
          do{
            diaSemana = prompt('Ingresa un dia de la semana (introduce domingo para finalizar): ')
            diaSemanaLowerCase = diaSemana.toLowerCase()

            if(verificarIsNaN(diaSemana)){
              if(['lunes', 'martes', 'miércoles', 'miercoles', 'jueves', 'viernes', 'sábado', 'sabado', 'domingo'].includes(diaSemanaLowerCase)){
                arreglo2.push(diaSemana)
                alert(`Introdujiste: ${diaSemana}`)
                
                if(diaSemanaLowerCase == 'lunes'){
                  alert('Apenas comienza la semana')
                }else if(diaSemanaLowerCase == 'martes'){
                  alert('Martes con M de mucha flojera')
                }else if(diaSemanaLowerCase == 'miercoles' || diaSemanaLowerCase == 'miércoles'){
                  alert('Ya vas a medio camino')
                }else if(diaSemanaLowerCase == 'jueves'){
                  alert('JueBeBes, saca los azulitos')
                }else if(diaSemanaLowerCase == 'viernes'){
                  alert('Al fin!')
                }else if(diaSemanaLowerCase == 'sábado' || diaSemanaLowerCase == 'sabado'){
                  alert('Sábado de playuki')
                }else if(diaSemanaLowerCase == 'domingo'){
                  alert('Ve a descansar')
                }
              }else{
                alert('No es un día de la semana')
              }
              
            }else{
              alert('No es un valor válido')
            }
            console.log('let diaSemana ', diaSemana)
            console.log('let arreglo2 ', arreglo2)
          }while(diaSemanaLowerCase !== 'domingo')
        break;  
        default:
          console.log("Opción no válida");
      }
}
window.addEventListener('load', function(){
    const botonSeleccionar = document.getElementById("seleccionar");
    
    botonSeleccionar.addEventListener('click', mostrarSeleccion);

    function mostrarSeleccion() {
        const selector = document.getElementById('selector');
        let opcionSeleccionada = selector.options[selector.selectedIndex].text;
        alert("Has seleccionado: " + opcionSeleccionada);

        let ejercicioSeleccionado = selector.value;
        inicio(ejercicioSeleccionado)
    }
})