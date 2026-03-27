// script.js

function generarTablas() {
    // 1. Ubicamos el contenedor en el HTML
    let contenedor = document.getElementById("contenedor-tablas");
    
    // 2. Limpiamos el contenedor por si el usuario presiona el botón varias veces
    contenedor.innerHTML = "";

    // 3. CICLO EXTERNO: Controla la tabla que estamos haciendo (del 1 al 10)
    for (let i = 1; i <= 10; i++) {
        
        // Creamos una "tarjeta" visual para la tabla actual
        let tarjeta = document.createElement("div");
        tarjeta.className = "tabla-card";
        
        // Le agregamos un título (Ej: "Tabla del 5")
        let titulo = document.createElement("h2");
        titulo.innerText = `Tabla del ${i}`;
        tarjeta.appendChild(titulo);

        // 4. CICLO INTERNO: Realiza las 10 multiplicaciones para la tabla actual
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            
            // Creamos un párrafo para cada línea (Ej: "5 x 1 = 5")
            let linea = document.createElement("p");
            linea.innerText = `${i} x ${j} = ${resultado}`;
            
            // Metemos la línea a la tarjeta
            tarjeta.appendChild(linea);
        }

        // 5. Finalmente, metemos la tarjeta terminada al contenedor principal
        contenedor.appendChild(tarjeta);
    }
}
