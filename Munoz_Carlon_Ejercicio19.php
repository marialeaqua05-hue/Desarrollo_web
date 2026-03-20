<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salidas de Texto en JS</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f9; }
        .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        button { background: #4f46e5; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; }
        button:hover { background: #4338ca; }
    </style>
</head>
<body>

    <div class="container">
        <h1>Mis Datos Personales</h1>
        
        <p id="datos-carrera"></p>

        <button onclick="mostrarAlerta()">Mostrar Alerta Oculta</button>
    </div>

    <script>
        document.getElementById("datos-carrera").innerHTML = "<strong>Carrera:</strong> Ingeniería en Software";

        document.write("<div class='container' style='margin-top: 20px;'><strong>Materia actual:</strong> Desarrollo Web</div>");

        function mostrarAlerta() {
            window.alert("¡Hola! Soy estudiante de Ingeniería de Software.");
        }

        console.log("Datos cargados correctamente. Proyecto en curso: Sistema de gestión.");
    </script>

</body>
</html>