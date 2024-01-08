
const myButton = document.querySelector(".mybutton");
const myCorlors = "red"

function numberAleatorio () {

    const numberMin = Math.ceil( document.querySelector("#min").value);
    const numberMax = Math.floor( document.querySelector("#max").value);
   
   

    if (numberMin>=numberMax) {
        alert("O valor minimo deve ser menor que o valor maximo");
    }
    else {
    const result = Math.floor (Math.random () * (numberMax - numberMin)) + numberMin;
    document.querySelector("h2").innerHTML =`O número sorteado é:`
    const endResult = document.querySelector(".number-value")
    endResult.innerHTML = result;
  }
 }


myButton.addEventListener("click", numberAleatorio);