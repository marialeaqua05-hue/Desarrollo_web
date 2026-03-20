// Función auxiliar para leer los valores de las cajas de texto
function obtenerValores() {
    // Usamos parseFloat para convertir el texto del input a un número con decimales
    let valorA = parseFloat(document.getElementById("num1").value);
    let valorB = parseFloat(document.getElementById("num2").value);
    
    return { a: valorA, b: valorB };
}

// Función auxiliar para imprimir en pantalla
function imprimirResultado(mensaje) {
    document.getElementById("pantalla-resultados").innerHTML = `
        <div class="resultado">${mensaje}</div>
    `;
}

// --- Funciones Aritméticas ---

function ejecutarSuma() {
    let datos = obtenerValores();
    
    // Validación: Comprobamos que el usuario sí haya escrito números (No es NaN)
    if (isNaN(datos.a) || isNaN(datos.b)) {
        imprimirResultado("⚠️ Por favor, ingresa ambos números.");
        return; 
    }

    let resultado = datos.a + datos.b;
    imprimirResultado(`<strong>Suma:</strong> ${datos.a} + ${datos.b} = ${resultado}`);
}

function ejecutarResta() {
    let datos = obtenerValores();
    if (isNaN(datos.a) || isNaN(datos.b)) return imprimirResultado("⚠️ Faltan números.");

    let resultado = datos.a - datos.b;
    imprimirResultado(`<strong>Resta:</strong> ${datos.a} - ${datos.b} = ${resultado}`);
}

function ejecutarDivision() {
    let datos = obtenerValores();
    if (isNaN(datos.a) || isNaN(datos.b)) return imprimirResultado("⚠️ Faltan números.");

    // Validación extra: No se puede dividir entre cero en matemáticas
    if (datos.b === 0) {
        imprimirResultado("🚨 Error: No se puede dividir entre cero.");
        return;
    }

    let resultado = datos.a / datos.b;
    imprimirResultado(`<strong>División:</strong> ${datos.a} / ${datos.b} = ${resultado.toFixed(2)}`);
}

function ejecutarExponenciacion() {
    let datos = obtenerValores();
    if (isNaN(datos.a) || isNaN(datos.b)) return imprimirResultado("⚠️ Faltan números.");

    let resultado = datos.a ** datos.b;
    imprimirResultado(`<strong>Exponenciación:</strong> ${datos.a}<sup>${datos.b}</sup> = ${resultado}`);
}