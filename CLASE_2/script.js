// QUE ME PONGO?
let pregunta1, pregunta2, pregunta3
let CALOR = document.getElementById('calor');
let FRIO = document.getElementById('frio');
let CASUAL = document.getElementById('casual');

pregunta1 = prompt('Hace calor?')
debugger;
if(pregunta1.toLowerCase() === "si"){
    alert('Deberías usar algo fresco')
    CALOR.style.display = 'block'
}else{
    pregunta2 = prompt('Hace frio?')
    if(pregunta2.toLowerCase() === "si"){
        alert('Deberias usar algo abrigado')
        FRIO.style.display = 'block'
    }else{
        pregunta3 = prompt('Está agradable?')
        if(pregunta3.toLowerCase() === "si"){
            alert('Deberias usar algo casual')
            CASUAL.style.display = 'block'
        }
    }
}
