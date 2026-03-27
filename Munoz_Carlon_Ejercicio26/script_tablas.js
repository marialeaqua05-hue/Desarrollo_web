// script_tablas.js

function generarTablas() {
    // 1. Obtener el valor ingresado por el usuario y convertirlo a número entero
    let inputUsuario = document.getElementById("limite").value;
    let limite = parseInt(inputUsuario);
    
    let contenedor = document.getElementById("contenedor-tablas");
    
    // 2. Limpiamos el contenedor por si había tablas anteriores
    contenedor.innerHTML = "";

    // 3. Validación de seguridad
    // Verificamos que sea un número, que sea mayor a 0 y que no sea un decimal extraño
    if (isNaN(limite) || limite <= 0 || !Number.isInteger(parseFloat(inputUsuario))) {
        alert("Por favor, ingresa un número entero positivo mayor a 0.");
        return; // Detenemos la ejecución si el dato es incorrecto
    }

    // 4. CICLO EXTERNO: En lugar de ir hasta el 10, ahora va hasta el 'limite' que puso el usuario
    for (let i = 1; i <= limite; i++) {
        
        let tarjeta = document.createElement("div");
        tarjeta.className = "tabla-card";
        
        let titulo = document.createElement("h2");
        titulo.innerText = `Tabla del ${i}`;
        tarjeta.appendChild(titulo);

        // 5. CICLO INTERNO: Las multiplicaciones estándar del 1 al 10 para cada tabla
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            
            let linea = document.createElement("p");
            linea.innerText = `${i} x ${j} = ${resultado}`;
            
            tarjeta.appendChild(linea);
        }

        contenedor.appendChild(tarjeta);
    }
}
