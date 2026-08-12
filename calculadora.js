const numeros = document.querySelectorAll(".numero");
const Textresultado = document.getElementById("resultado");
const TextCalculo = document.getElementById("calculo");
const TextIgual =  document.getElementById("igual");
const TextAll =  document.getElementById("all");
const TextClear =  document.getElementById("clear");


var calculo = []
var resultado

numeros.forEach(numero => {
    numero.addEventListener("click", () => {
        console.log("Número clicado:", numero.textContent);
        if (typeof calculo[calculo.length - 1] != "number") {
    calculo.push(Number(numero.textContent));
    console.log("calculo", calculo);
    FazerCalculo(calculo)
            }
            else{
                calculo[calculo.length - 1] = Number(
                String(calculo[calculo.length - 1]) + numero.textContent
            );
                ;console.log("calculo", calculo);
            }
             resultado = calculo[0]
        FazerCalculo(calculo)

    }
    
);

});

const operadores = document.querySelectorAll(".operador");

operadores.forEach(operador => {
    operador.addEventListener("click", () => {
        console.log("Operador clicado:", operador.textContent);
        if (calculo.length > 0 && typeof calculo[calculo.length - 1] === "number") {
    calculo.push(operador.textContent);
    console.log(calculo);
    TextCalculo.textContent = calculo.join("");
        
        }
        else if(typeof calculo[calculo.length - 1] === "string"){
            calculo[calculo.length-1]=operador.textContent
            console.log("calculo", calculo);
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
    if(typeof (calculo[calculo.length-1]) !== "string"){
    FazerCalculo(calculo)
    }
})

function FazerCalculo(mostrarCalculo) {
    if(mostrarCalculo.length >= 1){
        resultado=calculo[0]
    }
    if (mostrarCalculo.length >= 3) {
        mostrarCalculo.forEach((e, indice) => {
            console.log(indice);

            if (indice % 2 !== 0) {
                console.log(e);

                switch (e) {
                    case "+":
                        console.log(typeof resultado);
                        console.log(typeof mostrarCalculo[indice + 1]);

                        resultado += mostrarCalculo[indice + 1];
                        console.log("resultado", resultado);
                        break;

                    case "/":
                        resultado /= mostrarCalculo[indice + 1];
                        console.log("resultado", resultado);
                        break;

                    case "x":
                        resultado *= mostrarCalculo[indice + 1];
                        console.log("resultado", resultado);
                        break;

                    case "-":
                        resultado -= mostrarCalculo[indice + 1];
                        console.log("resultado", resultado);
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