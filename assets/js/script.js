// BORDE
function bordeImg (){
    const imagen = document.querySelector('#imagen')

// verificar si hay borde
        if (imagen.style.border === '') {
            imagen.style.border = '2px solid red';
        } else { 
            imagen.style.border = '';
        }
        
}

// STICKRES
document.getElementById('verificar').addEventListener('click', function(){
    //valores de los inputs
    let stick1 = parseInt(document.getElementById('stick-1').value) || 0;
    let stick2 = parseInt(document.getElementById('stick-2').value) || 0;
    let stick3 = parseInt(document.getElementById('stick-3').value) || 0;

    //suma los stickres
    let totalStickers = stick1 + stick2 + stick3;

    // mostrar resultado
    let resulStickers = document.getElementById('resulStickers');

    // verificar cantidad y mostrar mensaje
    if (totalStickers <= 10){
        resulStickers.textContent = " LLevas " + totalStickers + " stickers.";
    } else {
        resulStickers.textContent = "Llevas demasiados stickers, son solo 10 unidades."
    }
});


// PASSWORD

function verificarPassword() {
    // valores select
    let digito1 = document.getElementById("digito1").value;
    let digito2 = document.getElementById("digito2").value;
    let digito3 = document.getElementById("digito3").value;

    // Combinar digitos
    let password = digito1 + digito2 + digito3;

    // parrafo resultado
    let resultado = document.getElementById("resulPass");

    // Verificar pass
    if (password === "911") {
        resultado.textContent = "Password 1 correcto";
        resultado.style.color = "#729e2e";
        resultado.style.fontSize = "20px";
    } else if (password === "714") {
        resultado.textContent = "Password 2 correcto";
        resultado.style.color = "#729e2e";
    } else {
        resultado.textContent = "Password incorrecto";
        resultado.style.color = "red";
        resultado.style.fontSize = "20px";
    }
}


