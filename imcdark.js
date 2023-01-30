
var valorPeso = document.getElementById("peso")
var valorAltura = document.getElementById("altura")
var botaoCalcular = document.getElementById("botaocalcular")
var divResultado = document.getElementById("resultado")
var resultadoIMC = document.getElementById("resultadoIMC")
var botaoLimpar = document.getElementById("botaolimpar")

botaoCalcular.addEventListener("click", function() {
    divResultado.style.visibility = "visible"
    if (valorPeso.value.length == 0 || valorAltura.value.length == 0) {
        window.alert('Por favor, informe o valor pedido.')
    } else {
        valorPeso = Number.parseFloat(peso.value)
        valorAltura = Number.parseFloat(altura.value)
        var totalIMC = valorPeso / (valorAltura ** 2) 
        resultadoIMC.innerHTML = `Seu IMC é <strong>${totalIMC.toFixed(1)} kg/m²</strong>. `
        if (totalIMC < 17) {
            document.getElementById("row1").style.background = '#f7526ec2'
            document.getElementById("row1").style.color = 'black'
            resultadoIMC.innerHTML += 'Você está <strong>muito abaixo do peso</strong>.'
        } else if (totalIMC >= 17 && totalIMC < 18.5) {
            document.getElementById("row2").style.background = '#f7526ec2'
            document.getElementById("row2").style.color = 'black'
            resultadoIMC.innerHTML += 'Você está <strong>abaixo do peso</strong>.'
        } else if (totalIMC >= 18.5 && totalIMC < 25) {
            document.getElementById("row3").style.background = '#f7526ec2'
            document.getElementById("row3").style.color = 'black'
            resultadoIMC.innerHTML += 'Você está no <strong>peso ideal</strong>.'
        } else if (totalIMC >= 25 && totalIMC < 30) {
            document.getElementById("row4").style.background = '#f7526ec2'
            document.getElementById("row4").style.color = 'black'
            resultadoIMC.innerHTML += 'Você está com <strong>sobrepeso</strong>.'
        } else if (totalIMC >= 30 && totalIMC < 35) {
            document.getElementById("row5").style.background = '#f7526ec2'
            document.getElementById("row5").style.color = 'black'
            resultadoIMC.innerHTML += 'Você está com <strong>obesidade</strong>.'
        } else if (totalIMC >= 35 && totalIMC < 40) {
            document.getElementById("row6").style.background = '#f7526ec2'
            document.getElementById("row6").style.color = 'black'
            resultadoIMC.innerHTML += 'Você está com <strong>obesidade severa</strong>.'
        } else {
            document.getElementById("row7").style.background = '#f7526ec2'
            document.getElementById("row7").style.color = 'black'
            resultadoIMC.innerHTML += 'Você está com <strong>obesidade mórbida</strong>.'
        }   
    }  
}) 

 
botaoLimpar.addEventListener("click", function() {
    location.reload()
})








