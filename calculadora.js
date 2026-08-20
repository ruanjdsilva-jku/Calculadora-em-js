const TextNumeros = document.querySelectorAll(".numero");
const Textresultado = document.getElementById("resultado");
const TextCalculo = document.getElementById("calculo");
const TextIgual =  document.getElementById("igual");
const TextAll =  document.getElementById("all");
const TextClear =  document.getElementById("clear");
const Textoperadores = document.querySelectorAll(".operador");


var calculo = []
var resultado

TextNumeros.forEach(TextNumero => {
    TextNumero.addEventListener("click", () => {
        if (typeof calculo[calculo.length - 1] != "number") {
    calculo.push(Number(TextNumero.textContent));
            }
            else{
                calculo[calculo.length - 1] = Number(
                String(calculo[calculo.length - 1]) + TextNumero.textContent
            );
            }
        FiltrarCalculo(calculo)
    }
    
);

});

Textoperadores.forEach(operador => {
    operador.addEventListener("click", () => {
        if (calculo.length > 0 && typeof calculo[calculo.length - 1] === "number") {
    calculo.push(operador.textContent);
    TextCalculo.textContent = calculo.join("");
        }
        else if(typeof calculo[calculo.length - 1] === "string"){
            calculo[calculo.length-1]=operador.textContent
            TextCalculo.textContent = calculo.join("");
        }
    });
});

TextIgual.addEventListener("click",()=>{
    calculo=[]
    calculo[0]=resultado
    TextCalculo.textContent =resultado;
    Textresultado.textContent=""
    
})

TextAll.addEventListener("click",()=>{
    calculo=[]
    resultado=null
    TextCalculo.textContent =calculo;
    Textresultado.textContent=resultado
})

TextClear.addEventListener("click",()=>{
    if(calculo[calculo.length-1]<10 || typeof(calculo[calculo.length-1]) =="string"){
        calculo.pop()
    }else if(calculo[calculo.length-1]>10){  
        calculo[calculo.length-1] = Number(String(calculo[calculo.length-1]).slice(0,-1))
    }
    if(typeof(calculo[calculo.length-1]) !=="string"){
    FiltrarCalculo(calculo)}
})

function FazerCalculo(mostrarCalculo, TextoDeCalculo) {
    if (mostrarCalculo.length >= 1) {
        resultado = mostrarCalculo[0];
    }

    if (mostrarCalculo.length >= 3) {
        mostrarCalculo.forEach((e, indice) => {

            if (mostrarCalculo[indice + 1] == undefined) {
                return;
            }

            if (indice % 2 !== 0) {

                switch (e) {
                    case "+":
                        resultado += mostrarCalculo[indice + 1];
                        break;

                    case "/":
                        resultado /= mostrarCalculo[indice + 1];
                        break;

                    case "x":
                        resultado *= mostrarCalculo[indice + 1];
                        break;

                    case "-":
                        resultado -= mostrarCalculo[indice + 1];
                        break;
                }
            }
        });

        Textresultado.textContent = resultado;
        TextCalculo.textContent = TextoDeCalculo.join("");

    } else {
        TextCalculo.textContent = TextoDeCalculo.join("");

        if (mostrarCalculo.length === 0) {
            Textresultado.textContent = "";
        } else {
            Textresultado.textContent = resultado;
        }
    }
}

function FiltrarCalculo(calculo){
    let amostraCalculo = [...calculo]
    let calculoFiltrado = [...calculo]
    
    if(calculoFiltrado.length>4){
   for (let index = 0; index < calculoFiltrado.length; index++) {
        if(calculoFiltrado[index]=="x"){
            let gravarDados=calculoFiltrado.slice(index-1,index+2)
            let resultadoMultiplicacao=gravarDados[0] * gravarDados[2]
            calculoFiltrado.splice(index-1,3,resultadoMultiplicacao)
            index = -1
        }
        if(calculoFiltrado[index]=="/"){
            let gravarDados=calculoFiltrado.slice(index-1,index+2)
            let resultadoDivisao=gravarDados[0] / gravarDados[2]
            calculoFiltrado.splice(index-1,3,resultadoDivisao)
            index = -1
            
        }
   }
}
    FazerCalculo(calculoFiltrado,amostraCalculo)
}

