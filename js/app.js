console.log("Aplicación Calculadora");

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById('resultado').innerHTML = `Resultado de la suma: ${resultado}`;
    console.log(`Resultado de la suma: ${resultado}`);
}

function restar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById("resultado").innerHTML = `Resultado de la resta: ${resultado}`;
    console.log(`Resultado de la resta: ${resultado}`);
}

function multiplicar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById("resultado").innerHTML = `Resultado de la multiplicación: ${resultado}`;
    console.log(`Resultado de la multiplicación: ${resultado}`);
}

function dividir(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById("resultado").innerHTML = `Resultado de la división: ${resultado}`;
    console.log(`Resultado de la division: ${resultado}`);
}

function borrar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = "";
    document.getElementById("resultado").innerHTML = `Borrando casillas ${resultado}`;
    console.log(`Borrando casillas ${resultado}`);
    forma.reset();//Limpia las casilla de completar cuando clickeamos en borrar
}