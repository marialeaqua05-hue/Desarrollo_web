// 1. Declaración y asignación de variables
let valorA = 10;
let valorB = 3;

// Mostrar los valores iniciales en la interfaz HTML
document.getElementById("num1").innerText = valorA;
document.getElementById("num2").innerText = valorB;

// 2. Operaciones aritméticas
let suma = valorA + valorB;
let resta = valorA - valorB;
let division = valorA / valorB;

// Exponenciación (valorA elevado a la potencia de valorB)
let exponenciacion = valorA ** valorB; 

// 3. Imprimir en la página web
let pantalla = document.getElementById("pantalla-resultados");

// Inyectar el HTML con los resultados
pantalla.innerHTML = `
    <div class="operacion"><strong>Suma:</strong> ${valorA} + ${valorB} = ${suma}</div>
    <div class="operacion"><strong>Resta:</strong> ${valorA} - ${valorB} = ${resta}</div>
    <div class="operacion"><strong>División:</strong> ${valorA} / ${valorB} = ${division.toFixed(2)}</div>
    <div class="operacion"><strong>Exponenciación:</strong> ${valorA}<sup>${valorB}</sup> = ${exponenciacion}</div>
`;