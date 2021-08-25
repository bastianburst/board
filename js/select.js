//lista de opciones para canvas
let optioncanvas_array = [[300, 300], [600, 300], [600, 600], [800, 600], [800, 800],  [1200, 800]];

//llenar select de forma dinámica
let showOptionsinFront = document.getElementById("selectorcanvas");
for (i = 0; i <= optioncanvas_array.length - 1; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = optioncanvas_array[i];
    showOptionsinFront.appendChild(option);
}
//console.log(showOptionsinFront);
//Función para cambiar la opción del juego con el selector
function selectCanvasDimentions() {
    let code = document.getElementById("selectorcanvas").value;
    //console.log(code);
    //console.log(optioncanvas_array[code])
    localStorage.setItem('codigo', JSON.stringify(optioncanvas_array[code]));
    showOptionSelected();

}
/*Mostrar opción seleccionada en pantalla*/
let showOptionSelected = function () {
    //Sacar la opción elegida del local storage
    let selectedgameOption = localStorage.getItem("codigo");
    //console.log('activado');
    //lógica para mostrar en el front, si es null pone aleatorio, si es aleatorio pone lo que está en local storage
    //si no pone el número correspondiente
    let elementNumber = document.getElementById("shownumberselected");
    //console.log(selectedgameOption);
    if (selectedgameOption == "aleatorio") {
        elementNumber.innerHTML = selectedgameOption;
    } else if (selectedgameOption == null) {
        elementNumber.innerHTML = "Default";
    } else {
        elementNumber.innerHTML = selectedgameOption;
    }
    //console.log(elementNumber);
    medidasCanvas();
}
//iniciar con ultima configuración guardada en local storage de medidas de canvas
showOptionSelected();
medidasCanvas();