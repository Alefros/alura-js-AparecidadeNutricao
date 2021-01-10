
    const PESO_MINIMO = 30; 
    const PESO_MAXIMO = 200;
    
    const ALT_MINIMO = 0.80; 
    const ALT_MAXIMO = 2.5;
    
    var strTitulo = document.querySelector(".titulo").textContent;
    console.log(strTitulo);

    var pacientes = document.querySelectorAll(".paciente"); 
    

    for(var index = 0; index < pacientes.length; index++){
        
        //obter paciente atual
        var paciente = pacientes[index];

        //obter nome, peso e altura para calculo do IMC
        var pacienteNome = paciente.querySelector(".info-nome").textContent;
        var pacienteAltura = paciente.querySelector(".info-altura").textContent;
        var pacientePeso = paciente.querySelector(".info-peso").textContent;

        var tdImc = paciente.querySelector(".info-imc");

        var alturaEhValida = validaAltura(pacienteAltura);
        var pesoEhValido = validaPeso(pacientePeso);

        //validar peso
        if(!pesoEhValido){
            console.log("O paciente" + pacienteNome + "possui o peso inválido!");  
            paciente.classList.add("paciente-invalido");
        } 

        //validar peso
        if(!pesoEhValido){
            console.log("O paciente" + pacienteNome + "possui a altura inválida!");
            paciente.classList.add("paciente-invalido");
        } 

        if(pesoEhValido && alturaEhValida){
            var pacienteIMC = calculaImc(pacientePeso, pacienteAltura);
            tdImc.textContent = pacienteIMC;     
        }else{
            tdImc.textContent = "Dados Inválidos"
        }   
    } 


function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}