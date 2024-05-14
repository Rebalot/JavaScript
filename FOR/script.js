// 1. Crea un programa que imprima en consola los números impares del 1 al 50.
// 2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.
// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.
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
      let valorIsNaN = parseInt(input)
      if(isNaN(valorIsNaN)){
        // ES LETRA
        return true
      }else if(!isNaN(valorIsNaN)){
        // ES NUMERO
        return false
      }
    }
    function divisible(dividendo, divisor) {
      return dividendo % divisor === 0; 
      // Si es divisible entre divisor sin dejar residuo manda true, de lo contrario, false.
    }
    switch(opcion) {
        case 'opcion1':
          for (let i=1; i <= 50; i++) {
            if(!divisible(i, 2)){
              console.log(i)
            }
          }
          alert('Revisa la consola')
        break;
        case 'opcion2':
          let pokemons = 
          [ 'bulbasaur',
            'ivysaur',
            'venusaur',
            'charmander',
            'charmeleon',
            'charizard',
            'squirtle',
            'wartortle',
            'blastoise',
            'caterpie',
            'metapod',
            'butterfree',
            'weedle',
            'kakuna',
            'beedrill',
            'pidgey',
            'pidgeotto',
            'pidgeot',
            'rattata',
            'raticate',
            'spearow',
            'fearow',
            'ekans',
            'arbok',
            'pikachu',
            'raichu',
            'sandshrew',
            'sandslash',
            'nidoran-f',
            'nidorina',
            'nidoqueen',
            'nidoran-m',
            'nidorino',
            'nidoking',
            'clefairy',
            'clefable',
            'vulpix',
            'ninetales',
            'jigglypuff',
            'wigglytuff',
            'zubat',
            'golbat',
            'oddish',
            'gloom',
            'vileplume',
            'paras',
            'parasect',
            'venonat',
            'venomoth',
            'diglett',
            'dugtrio',
            'meowth',
            'persian',
            'psyduck',
            'golduck',
            'mankey',
            'primeape',
            'growlithe',
            'arcanine',
            'poliwag',
            'poliwhirl',
            'poliwrath',
            'abra',
            'kadabra',
            'alakazam',
            'machop',
            'machoke',
            'machamp',
            'bellsprout',
            'weepinbell',
            'victreebel',
            'tentacool',
            'tentacruel',
            'geodude',
            'graveler',
            'golem',
            'ponyta',
            'rapidash',
            'slowpoke',
            'slowbro',
            'magnemite',
            'magneton',
            'farfetchd',
            'doduo',
            'dodrio',
            'seel',
            'dewgong',
            'grimer',
            'muk',
            'shellder',
            'cloyster',
            'gastly',
            'haunter',
            'gengar',
            'onix',
            'drowzee',
            'hypno',
            'krabby',
            'kingler',
            'voltorb' ]
          let valorPrompt
          
          do{
            valorPrompt = prompt('Introduce un numero del 1 - 100: ')
            if(!verificarIsNaN(valorPrompt)){
              if(valorPrompt >= 1 && valorPrompt <= 100){
                for (let index = 0; index < valorPrompt; index++) {
                  let pokemonElegido = index + 1;
                  if(divisible(pokemonElegido, 5)){
                    console.log(pokemons[index])
                  }
                }
                console.log(pokemons)
                alert('Revisa la consola')
              }else{
                alert('No está dentro del rango, introduce un numero válido')
              }

            }else{
              alert('No es un valor válido')
            }
          }while(verificarIsNaN(valorPrompt) || valorPrompt > 100 || valorPrompt < 1)
          
        break;
        case 'opcion3':
          arreglo = [4,"dos",8,"tres",5,9,1,"cero"]
          for (let index = 0; index < arreglo.length; index++) {
            let actual = arreglo[index]
            if(typeof actual === 'number'){
              console.log(arreglo[index])
            }
          }
          alert('Revisa la consola')
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