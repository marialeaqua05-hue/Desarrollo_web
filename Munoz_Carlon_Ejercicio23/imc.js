function calcularIMC() {
    // 1. Obtener los valores del formulario
    let peso = parseFloat(document.getElementById("peso").value);
    let alturaCm = parseFloat(document.getElementById("altura").value);

    let pantalla = document.getElementById("pantalla-resultado");

    // Validación: Verificar que se hayan ingresado números válidos y mayores a cero
    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
        pantalla.style.display = "block";
        pantalla.style.backgroundColor = "#ffebee";
        pantalla.style.color = "#b71c1c";
        pantalla.innerHTML = "🌸 Por favor, ingresa valores válidos para peso y altura.";
        return;
    }

    // 2. Convertir altura de centímetros a metros para la fórmula
    let alturaM = alturaCm / 100;

    // 3. Calcular el IMC: peso / (altura en metros al cuadrado)
    let imc = peso / (alturaM ** 2);

    // 4. Determinar el grado/categoría del IMC
    let grado = "";
    let colorFondo = "";
    let colorTexto = "";

    if (imc < 18.5) {
        grado = "Bajo peso";
        colorFondo = "#e3f2fd"; // Azul claro
        colorTexto = "#1565c0";
    } else if (imc >= 18.5 && imc <= 24.9) {
        grado = "Peso normal (Saludable)";
        colorFondo = "#e8f5e9"; // Verde claro
        colorTexto = "#2e7d32";
    } else if (imc >= 25.0 && imc <= 29.9) {
        grado = "Sobrepeso";
        colorFondo = "#fff3e0"; // Naranja claro
        colorTexto = "#ef6c00";
    } else {
        grado = "Obesidad";
        colorFondo = "#ffebee"; // Rojo claro
        colorTexto = "#c62828";
    }

    // 5. Mostrar el resultado en la página web
    pantalla.style.display = "block";
    pantalla.style.backgroundColor = colorFondo;
    pantalla.style.color = colorTexto;
    pantalla.style.border = `1px solid ${colorTexto}`;
    
    pantalla.innerHTML = `
        <strong>Tu IMC es: ${imc.toFixed(2)}</strong><br>
        <span style="font-size: 18px; margin-top: 8px; display: block;">Clasificación: <b>${grado}</b></span>
    `;
}