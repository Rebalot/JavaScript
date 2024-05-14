// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
// Entregables
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
          let array1 = []
          let lista = prompt("Ingresa datos separados por coma (,): ")
          array1 = lista.split(',')
          console.log(array1)
          alert('Revisa la consola')
        break;
        case 'opcion3':
          const array2 = [10,40,30,20,15,5]
          array2.sort((a, b) => a - b);

          const numMayor = Math.max(...array2)
          const numMenor = Math.min(...array2)

          console.log(array2)
          console.log(numMayor)
          console.log(numMenor)
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