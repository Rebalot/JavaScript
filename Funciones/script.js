// Deberas realizar un semáforo utilizando JS.
// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
// Se debe respetar el orden de los colores:
// De rojo pasa a Verde.
// De amarillo puede pasar a Rojo.
// De Verde pasa a Amarillo.
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
          const semaforo = [
            document.querySelector('.luz.roja'),
            document.querySelector('.luz.verde'),
            document.querySelector('.luz.amarilla'),
          ]

          for(let index = 0; index < semaforo.length; index++){
            let luzActual = semaforo[index]
            luzActual.classList.remove('inactive');
            await pausa(3000)
            luzActual.classList.add('inactive');
          }

        break;
        case 'opcion2':
          const semaforo1 = [
            document.querySelector('.luz.roja'),
            document.querySelector('.luz.verde'),
            document.querySelector('.luz.amarilla'),
          ]
          let contador = 0
          let luzPass = false

          async function detener(intervalo) {
            clearInterval(intervalo);
            await pausa(2000)
            quitarLuz();
          }
          
          function cambiarLuz(){
            quitarLuz();
            agregarLuz();
            contador++
            luzPass = true
          }

          function agregarLuz(){
            let luzActual1 = semaforo1[contador]
            let imgLuz = document.createElement('img')
            if(contador == 0){
              imgLuz.src = 'images/luz_roja.png'
            }else if(contador == 1){
              imgLuz.src = 'images/luz_verde.png'
            }else if(contador == 2){
              imgLuz.src = 'images/luz_amarilla.png'
            }
            luzActual1.appendChild(imgLuz)
          }

          function quitarLuz(){
            let luzAnterior1 = semaforo1[contador - 1]
            if(luzPass){
              let imgLuzAnterior = luzAnterior1.querySelector('img')
              luzAnterior1.removeChild(imgLuzAnterior)
              if(contador == 3){
                contador = 0
              }
            }
          }

          const cambioDeLuces = setInterval(cambiarLuz,2000);
          setTimeout(() => detener(cambioDeLuces), 12000);

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