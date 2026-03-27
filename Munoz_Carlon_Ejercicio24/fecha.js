// 1. Obtener la fecha actual del sistema
const fechaActual = new Date();

// 2. Extraer los componentes individuales
let diaSemanaNumero = fechaActual.getDay(); // Retorna de 0 (Domingo) a 6 (Sábado)
let diaMes = fechaActual.getDate();         // Retorna el día del mes (1 - 31)
let mesNumero = fechaActual.getMonth();     // Retorna de 0 (Enero) a 11 (Diciembre)
let anio = fechaActual.getFullYear();       // Retorna el año (Ej: 2026)

// 3. Variables para guardar los textos traducidos
let diaSemanaTexto = "";
let mesTexto = "";

// 4. Utilizar switch para traducir el número del día a texto
switch (diaSemanaNumero) {
    case 0: diaSemanaTexto = "domingo"; break;
    case 1: diaSemanaTexto = "lunes"; break;
    case 2: diaSemanaTexto = "martes"; break;
    case 3: diaSemanaTexto = "miércoles"; break;
    case 4: diaSemanaTexto = "jueves"; break;
    case 5: diaSemanaTexto = "viernes"; break;
    case 6: diaSemanaTexto = "sábado"; break;
    default: diaSemanaTexto = "día desconocido";
}

// 5. Utilizar switch para traducir el número del mes a texto
switch (mesNumero) {
    case 0: mesTexto = "Enero"; break;
    case 1: mesTexto = "Febrero"; break;
    case 2: mesTexto = "Marzo"; break;
    case 3: mesTexto = "Abril"; break;
    case 4: mesTexto = "Mayo"; break;
    case 5: mesTexto = "Junio"; break;
    case 6: mesTexto = "Julio"; break;
    case 7: mesTexto = "Agosto"; break;
    case 8: mesTexto = "Septiembre"; break;
    case 9: mesTexto = "Octubre"; break;
    case 10: mesTexto = "Noviembre"; break;
    case 11: mesTexto = "Diciembre"; break;
    default: mesTexto = "mes desconocido";
}

// 6. Construir la cadena de texto con el formato exacto solicitado
let mensajeFinal = `Hoy es ${diaSemanaTexto} ${diaMes} de ${mesTexto} del año ${anio}`;

// 7. Imprimir el resultado en el documento HTML
document.getElementById("pantalla-fecha").innerText = mensajeFinal;
