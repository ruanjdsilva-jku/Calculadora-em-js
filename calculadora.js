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
    FazerCalculo(calculo)
            }
            else{
                calculo[calculo.length - 1] = Number(
                String(calculo[calculo.length - 1]) + TextNumero.textContent
            );
            }
        FazerCalculo(calculo)
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
    FazerCalculo(calculo)
})

function FazerCalculo(mostrarCalculo) {
    if(mostrarCalculo.length >= 1){
        resultado=calculo[0]
    }
    if (mostrarCalculo.length >= 3) {
        mostrarCalculo.forEach((e, indice) => {

            if(mostrarCalculo[indice + 1]==undefined){
                return
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

                Textresultado.textContent = resultado;
                TextCalculo.textContent = mostrarCalculo.join("");
            }
        });

    } else {
        TextCalculo.textContent = mostrarCalculo.join("");
        Textresultado.textContent=""
    }
}