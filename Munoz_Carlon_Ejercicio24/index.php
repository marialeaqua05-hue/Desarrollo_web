<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fecha Actual con Switch</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            background-color: #f0f4f8; 
            color: #333; 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .tarjeta-fecha { 
            background: white; 
            padding: 40px; 
            border-radius: 12px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
            text-align: center;
            border-top: 5px solid #4f46e5;
        }
        h1 {
            font-size: 20px;
            color: #666;
            margin-bottom: 20px;
        }
        #pantalla-fecha {
            font-size: 24px;
            font-weight: bold;
            color: #4f46e5;
        }
    </style>
</head>
<body>

    <div class="tarjeta-fecha">
        <h1>La fecha de hoy es:</h1>
        <div id="pantalla-fecha">Calculando fecha...</div>
    </div>

    <script src="fecha.js"></script>

</body>
</html>
