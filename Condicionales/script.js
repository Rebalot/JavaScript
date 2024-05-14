// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses
// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
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
          let pregunta1 = prompt('Eres bellisimo/a?')
          pregunta1 = pregunta1.toLowerCase();

          if(pregunta1 == 'si' || pregunta1 == 'sí'){
            alert('Ciertamente')
          }else if(pregunta1 == 'no'){
            alert('No te creo')
          }else{
            alert('No es una respuesta válida')
          }
          
        break;
        case 'opcion2':
          function divisible(pregunta2) {
            return pregunta2 % 2 === 0; //% operador de modulo, indica el residuo de una división
          }
    
          let pregunta2 = parseFloat(prompt('Escribe un número:'));
          
          if (isNaN(pregunta2)) {
            alert('No es una respuesta válida')
          }else if(divisible(pregunta2)) {
            alert(pregunta2 + " es divisible entre dos");  
          }else{
            alert(pregunta2 + " no es divisible entre dos");
          }
        break;
        case 'opcion3':
          function divisible(pregunta3) {
            return pregunta3 % 2 === 0; //% operador de modulo, indica el residuo de una división
          }
    
          let pregunta3 = parseFloat(prompt('Escribe un número:'));
          
          if (isNaN(pregunta3)) {
            alert('No es una respuesta válida')
          }else if(divisible(pregunta3)) {
            alert(pregunta3 + " es par");  
          }else{
            alert(pregunta3 + " es impar");
          }
        break;
        case 'opcion4':
          let pregunta4 = parseInt(prompt('Introduce tu número de cliente:'));
          
          if (isNaN(pregunta4)) {
            alert('No es una respuesta válida')
          }else if(pregunta4 === 1000) {
            alert("Ganaste un premio");  
          }else{
            alert("Lo sentimos, sigue participando");
          }
          break;
        case 'opcion5':
          let pregunta5_1 = parseFloat(prompt('Introduce el primer número:'));
          let pregunta5_2 = parseFloat(prompt('Introduce el segundo número: '));
          
          if (isNaN(pregunta5_1) || isNaN(pregunta5_2)) {
            alert('No es una respuesta válida')
          }else if(pregunta5_1 < pregunta5_2) {
            alert(pregunta5_1 + ' es menor que ' + pregunta5_2);  
          }else if(pregunta5_1 > pregunta5_2){
            alert(pregunta5_2 + ' es menor que ' + pregunta5_1);
          }
        break;
        case 'opcion6':
          let pregunta6_1 = parseFloat(prompt('Introduce el primer número:'));
          let pregunta6_2 = parseFloat(prompt('Introduce el segundo número: '));
          let pregunta6_3 = parseFloat(prompt('Introduce el tercer número: '));


          let numeroMayor = Math.max(pregunta6_1, pregunta6_2, pregunta6_3);
          if(!isNaN(pregunta6_1) && !isNaN(pregunta6_2) && !isNaN(pregunta6_3)){
            alert('El número mayor es: ' + numeroMayor);
          }
          
          if (isNaN(pregunta6_1) || isNaN(pregunta6_2) || isNaN(pregunta6_3)) {
            alert('No es una respuesta válida')
          }else if(pregunta6_1 === pregunta6_2 && pregunta6_2 === pregunta6_3){
            alert('Los tres números introducidos son iguales')
          }else if(pregunta6_1 === pregunta6_2) {
            alert('Tu primer y segundo número introducido son iguales');  
          }else if(pregunta6_1 === pregunta6_3) {
            alert('Tu primer y tercer número introducido son iguales');  
          }else if(pregunta6_2 === pregunta6_3) {
            alert('Tu segundo y tercer número introducido son iguales');  
          }
        break;
        case 'opcion7':
          let pregunta7 = prompt('Ingresa un día de la semana: ')
          pregunta7 = pregunta7.toLowerCase();

          if(pregunta7 === 'lunes'){
            alert('Piensa que el lunes es solo un día más, y afróntalo con tu mejor cara. ¡Feliz día!')
          }else if(pregunta7 === 'viernes'){
            alert('Que la fuerza del viernes te acompañe ')
          }else if(pregunta7 === 'sabado' || pregunta7 === 'sábado'){
            alert('Sábado: modo de fin de semana "on"')
          }else if(pregunta7 === 'domingo'){
            alert('¿El mejor plan para el domingo? ¡No tener planes!')
          }else if(pregunta7 === 'martes' || pregunta7 === 'miercoles' || pregunta7 === 'miércoles' || pregunta7 === 'jueves'){
            alert('No hay feliz día... solo día 😥')
          }else{
            alert('No es una respuesta válida')
          }
        break;
        case 'opcion8':
          let calificacion = parseInt(prompt('Introduce una calificación: '))
          if(isNaN(calificacion)){
            alert('No es un valor válido')
          }else if(calificacion > 0 && calificacion <=10){
            if(calificacion < 6){
              alert('Reprobado')
            }else if(calificacion >= 6 && calificacion <= 8){
              alert('Regular')
            }else if(calificacion == 9){
              alert('Bien')
            }else if(calificacion == 10){
              alert('Excelente')
            }
          }else{
            alert('No es un valor válido')
          }
        break;
          
        case 'opcion9':
          
          parrafo('Hola bienvenido a Helados X', 'first', 'parrafo')
          await pausa(1000)
          parrafo('El helado tiene un costo de $50', 'first', 'parrafo')

          const selectorSiNoTopping = document.getElementById('selector_topping') // contenedor del input radio con su label
          const inputsTopping = document.querySelectorAll('input[name="Topping"]');
          const confirmarTopping = document.getElementById('confirmarTopping')

          selectorSiNoTopping.style.display = 'flex'
          
          await deshabilitarConfirmar(confirmarTopping, inputsTopping, 'radio')

          const toppingsContenedor = document.querySelector('.seleccion_contenedor.toppings')
          let opcionSeleccionadaTopping = opcionChecked(inputsTopping); //valor de la input check
          const valorInput = document.getElementById('inputTopping') //Input tipo texto, donde el usuario busca
          const confirmarToppingElegido = document.getElementById('confirmarToppingElegido')
          const toppingsListado = document.getElementById('toppings') //selector de tipos de toppings
          const inputTopping = document.querySelector('.inputTexto.topping') // contenedor del input texto con su label
          
          let toppingElegidoPass = false
          let eventListenerAgregado = false

          console.log('toppingElegidoPass: ',toppingElegidoPass, 'eventListenerAgregado: ',eventListenerAgregado)
          
          if(opcionSeleccionadaTopping == 'conTopping'){
            toppingsContenedor.style.display = 'inline-flex'
            confirmarToppingElegido.addEventListener('click', conTopping)

            const interval = setInterval(verificar, 1000);

            async function conTopping(){
              if(toppingsListado.value == 'topping4'){
                console.log('Topping 4')
                inputTopping.style.display = 'flex';
                await inputEnter();
                
              }else{
                console.log('Topping 1, 2 o 3')
                inputTopping.style.display = 'none';
                confirmarToppingElegido.disabled = true;
                toppingElegidoPass = true
                await inputEnter()
              }
            }
            
            function keypressConfirmar(event){
              EnterInput(event, 'toppings', valorInput);
              console.log('MensajeEnter')
            }

            async function inputEnter(){
              if(!eventListenerAgregado && !toppingElegidoPass){
                eventListenerAgregado = true
                valorInput.addEventListener('keypress', keypressConfirmar);
                console.log('EnterAgregado')
              }else if(eventListenerAgregado && toppingElegidoPass){
                valorInput.removeEventListener('keypress', keypressConfirmar);
                console.log('EnterEliminado')
              }
            }

            function subtotal(){
              let costo = 0
              if(toppingsListado.value == 'topping1'){
                costo = 10
              }else if(toppingsListado.value == 'topping2'){
                costo = 15
              }else if(toppingsListado.value == 'topping3'){
                costo = 20
              }
              return Number(costo)
            }
            async function verificar(){
              if(toppingElegidoPass){
                clearInterval(interval);
                parrafo('Subtotal', 'second', 'span');
                await pausa(1000);
                parrafo(`Helado: $50`, 'second', 'parrafo');
                await pausa(1000);
                parrafo(`Topping extra: $${subtotal()}`, 'second', 'parrafo')
                await pausa(1000);
                parrafo(`Total a pagar: $${Number(50)+subtotal()}`, 'second', 'span')
                confirmarToppingElegido.removeEventListener('click', conTopping);
                finalizar();
              }
            }
            
          }else if(opcionSeleccionadaTopping == 'sinTopping'){
            parrafo('Subtotal', 'second', 'span');
            await pausa(1000);
            parrafo(`Helado: $50`, 'second', 'parrafo');
            await pausa(1000);
            parrafo('Total a pagar: $50', 'second', 'span')
            finalizar();
          }
          
          
          async function finalizar(){
            await pausa(10000);
            eliminarParrafo();
            resetearInputs();
            selectorSiNoTopping.style.display = 'none'
            toppingsContenedor.style.display = 'none'
            inputTopping.style.display = 'none'
          }
        break;

        case 'opcion10':
          parrafo('Hola bienvenido a Universidad X', 'first', 'parrafo')
          await pausa(2000)
          
          const selectorPrograma = document.getElementById('selector_programa')
          const inputsPrograma = document.querySelectorAll('input[name="programas"]');
          const confirmarPrograma = document.getElementById('confirmarPrograma')

          selectorPrograma.style.display = 'flex'
          await deshabilitarConfirmar(confirmarPrograma, inputsPrograma, 'radio')

          const selectorBeca = document.getElementById('selector_beca')
          const inputsBeca = document.querySelectorAll('input[name="beca"]');
          const confirmarBeca = document.getElementById('confirmarBeca')

          selectorBeca.style.display = 'flex'
          await deshabilitarConfirmar(confirmarBeca, inputsBeca, 'radio')

          let opcionSeleccionada = opcionChecked(inputsBeca)
          
          const becasListado = document.getElementById('becas')
          const becasContenedor = document.querySelector('.seleccion_contenedor.becas')
          const confirmarBecaElegida = document.getElementById('confirmarBecaElegida')

          async function total(tipoCurso, duracion, costo, tipo, descuento, descuentoTexto, becaTexto){
            let subtotalAPagar = costo*duracion
            if(tipo == 'conDescuento'){
              let cantidadADescontar = subtotalAPagar*descuento
              parrafo('Subtotal', 'second', 'span');
              await pausa(1000);
              parrafo(`${tipoCurso} de ${duracion} meses: $${subtotalAPagar}`, 'second', 'parrafo');
              await pausa(1000);
              parrafo(`Descuento ${becaTexto}: -${descuentoTexto}`, 'second', 'parrafo')
              await pausa(1000);
              parrafo(`Total a pagar: $${subtotalAPagar-cantidadADescontar}`, 'second', 'span')
            }else if(tipo == 'sinDescuento'){
              parrafo('Subtotal', 'second', 'span');
              await pausa(1000);
              parrafo(`${tipoCurso} de ${duracion} meses: $${subtotalAPagar}`, 'second', 'parrafo');
              await pausa(1000);
              parrafo(`Total a pagar: $${subtotalAPagar}`, 'second', 'span')
            }
          }

          const programaSeleccionado = document.querySelector('input[name="programas"]:checked');

          let costoPrograma
          let duracionPrograma
          let tipoPrograma

          if(programaSeleccionado.value == 'course'){
            costoPrograma = Number(4999)
            duracionPrograma = Number(2)
            tipoPrograma = 'Course'
          }else if(programaSeleccionado.value == 'carrera'){
            costoPrograma = Number(3999)
            duracionPrograma = Number(6)
            tipoPrograma = 'Carrera'
          }else if(programaSeleccionado.value == 'master'){
            costoPrograma = Number(2999)
            duracionPrograma = Number(12)
            tipoPrograma = 'Master'
          }

          if(opcionSeleccionada == 'siBeca'){
            becasContenedor.style.display = 'inline-flex'
            await deshabilitarConfirmar(confirmarBecaElegida, becasListado, 'selector')
            let descuento
            let descuentoText
            let becaText
            if(becasListado.value == 'opcion2'){
              descuento = Number(0.2)
              descuentoText = '20%'
              becaText = 'Beca Facebook'
            }else if(becasListado.value == 'opcion3'){
              descuento = Number(0.15)
              descuentoText = '15%'
              becaText = 'Beca Google'
            }else if(becasListado.value == 'opcion4'){
              descuento = Number(0.5)
              descuentoText = '50%'
              becaText = 'Beca Jesua'
            }
            
            await total(tipoPrograma, duracionPrograma, costoPrograma, 'conDescuento', descuento, descuentoText, becaText);
          }else{
            await total(tipoPrograma, duracionPrograma, costoPrograma, 'sinDescuento');
          }
          await pausa(10000)
          eliminarParrafo();
          resetearInputs();
          selectorPrograma.style.display = 'none'
          selectorBeca.style.display = 'none'
          becasContenedor.style.display = 'none'
          
        break;
        case 'opcion11':
          parrafo('Hola bienvenido a GasoCash', 'first', 'parrafo')
          await pausa(1000)
          parrafo('Tu app favorita para calcular el costo de tus kilómetros recorridos 😍', 'first', 'parrafo')
          const selectorVehiculo = document.getElementById('selector_vehiculo')
          const inputsVehiculos = document.querySelectorAll('input[name="vehiculos"]');
          const confirmarVehiculo = document.getElementById('confirmarVehiculo')

          selectorVehiculo.style.display = 'flex'
          await deshabilitarConfirmar(confirmarVehiculo, inputsVehiculos, 'radio')

          let opcionSeleccionadaVehiculos = opcionChecked(inputsVehiculos)
          //Consideraré 1 litro consumido por kilómetro, ya que no menciona cuantos litros consume cada vehículo por kilómetro
          let precioKilometro = 0
          if(opcionSeleccionadaVehiculos == 'coche'){
            precioKilometro = Number(0.20)
          }else if(opcionSeleccionadaVehiculos == 'moto'){
            precioKilometro = Number(0.10)
          }else if(opcionSeleccionadaVehiculos == 'autobus'){
            precioKilometro = Number(0.50)
          }
          const inputKilometro = document.querySelector('.inputTexto.kilometro')
          inputKilometro.style.display = 'flex';

          const valueInput = document.getElementById('inputKilometro')
          const confirmarKmRecorrido = document.getElementById('confirmarKmRecorrido')

          let kilometros = await confirmarKilometros();

          function confirmarKilometros(){
            let valorIntroducido
            let valorNumerico = false;
            return new Promise((resolve, reject) => {
              
              confirmarKmRecorrido.addEventListener('click',
              clickConfirmar)

              valueInput.addEventListener('keypress', keypressConfirmar)
              
              function keypressConfirmar(event){
                valorNumerico = EnterInput(event, 'kilometros', valueInput);
                if(valorNumerico){
                  kmRecorrido();
                }
              }
                
              function clickConfirmar(){
                valorIntroducido = parseFloat(valueInput.value);
                if(!isNaN(valorIntroducido)) {
                  if(valorIntroducido <= 0){
                    alert('No es un valor válido');
                  }else{
                    valorNumerico = true;
                    kmRecorrido();
                  }
                } else {
                  alert('No es un valor válido');
                  valorNumerico = false;
                }       
                
              }

              function kmRecorrido(){
                valorIntroducido = parseFloat(valueInput.value);
                if(valorNumerico){
                  valueInput.removeEventListener('keypress', keypressConfirmar);
                  confirmarKmRecorrido.removeEventListener('click', clickConfirmar)
                  valueInput.disabled = true;
                  confirmarKmRecorrido.disabled = true;
                  parrafo(`Valor introducido: ${valorIntroducido} km`, 'second', 'parrafo')
                  resolve(valorIntroducido);
                }
              }
            })
          }
          const labelVehiculoSeleccionado = document.querySelector(`label[for="${opcionSeleccionadaVehiculos}"]`).textContent.trim();
          
          let totalAPagar = 0
          let extraLtrs = 0

          async function pago(){
            if(kilometros <= 100){
              extraLtrs = 5
              totalAPagar = (kilometros * precioKilometro + extraLtrs).toFixed(2);
              
            }else{
              extraLtrs = 10
              totalAPagar = (kilometros * precioKilometro + extraLtrs).toFixed(2);
            }
          }

          await pago();

          parrafo('Total a pagar = (Km recorridos x precio km) + Extra ltrs. consumidos', 'second', 'span');
          await pausa(1000);
          parrafo(`${kilometros} km recorridos`, 'second', 'parrafo');
          parrafo(`Tipo vehículo: ${labelVehiculoSeleccionado}`, 'second', 'parrafo');
          await pausa(1000);
          parrafo(`Precio km: $${precioKilometro}`, 'second', 'parrafo')
          await pausa(1000);
          parrafo(`Extra ltrs. consumidos: $${extraLtrs}`, 'second', 'parrafo')
          await pausa(1000);
          parrafo(`Total a pagar: $${totalAPagar}`, 'second', 'span')
          
          await pausa(10000)
          eliminarParrafo();
          resetearInputs();
          selectorVehiculo.style.display = 'none'
          inputKilometro.style.display = 'none'

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