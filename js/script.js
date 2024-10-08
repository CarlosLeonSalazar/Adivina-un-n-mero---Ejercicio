// Carlos León Salazar

//Adivina un número al azar entre 1 y 20



async function adivinaNumero(){

    const numeroSecreto = Math.round(Math.random(1) * 20) ;
    console.log(numeroSecreto)

    let intentos = 0;
    let intentosTexto = "";
 

    while (intentos < 3) {

        //Pedir al usuario un número
        let numeroUsuario = parseInt(prompt("Adivina un número del 1 al 20"));

        //variable contador se incrementa en 1
        intentos++;
        console.log(intentos)

         // Acumular la información de los intentos
         intentosTexto += `Intento ${intentos}: Has indicado ${numeroUsuario}.<br>`;


         document.querySelector("#intentos").innerHTML = intentos


        // Comprobar si el número es igual al número secreto
        if (numeroUsuario === numeroSecreto) {
            console.log(`Has gando! El número secreto era ${numeroSecreto} y has usado ${intentos} intento(s).`);
            intentosTexto += "Has ganado!"
            resultado.innerHTML = `Has ganado! El número secreto era ${numeroSecreto}.`
            
            break;
            
        } else if (numeroUsuario < numeroSecreto) {
            console.log("El número secreto es mayor");
            intentosTexto += `El número secreto es mayor.<br><br>`
            
            
        } else {
            console.log("El número secreto es menor");
            intentosTexto += `El número secreto es menor.<br><br>`
            
            
        };

        // Mostrar el número de intentos en el HTML
       document.querySelector("#intento").innerHTML = intentosTexto

        // Mostrar el resultado en el HTML
        if (intentos === 3) {
            console.log("Has perdido. El número secreto era", numeroSecreto);
            resultado.textContent = `Has perdido. El número secreto era ${numeroSecreto}`
        }

        // Esperar un poco para que el navegador actualice el DOM antes de la próxima iteración
        await new Promise(r => setTimeout(r, 100));  // Pausa de 100 ms


    }

}

function borrar(){
    document.querySelector("#intento").innerHTML = "";
    document.querySelector("#resultado").textContent = "";
    document.querySelector("#intentos").textContent = "";
}


