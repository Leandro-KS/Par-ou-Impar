<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <script src="xxxxxxxxxxxxx"></script>
</head>

<body>
    <h1>Nunca Desista</h1>
</body>

exibirTipo(20);
function exibirTipo(limite){
    for (let i = 0; i <= limite; i++){
        if ( i % 2 === 0)
            console.log(i,'PAR');
        else
            console.log(i,'IMPAR');    
    }
}
