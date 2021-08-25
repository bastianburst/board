//Dibujar con el mouse
let square = document.getElementById("drawmouse");
let paper = square.getContext("2d");
let download = document.getElementById("download");

square.addEventListener("mousedown", presionarMouse);
square.addEventListener("mouseup", levantarMouse);
square.addEventListener("mousemove", moverMouse);
let estado = false;
let elementolapiz = true;
let x;
let y;
lapiz();


function medidasCanvas() {
    let array = localStorage.getItem("codigo");
    console.log("desde el mosue.js" + array);
    selectedgameOption = JSON.parse(array);
    console.log(selectedgameOption[0], selectedgameOption[1]);
    square.width = selectedgameOption[0];
    square.height = selectedgameOption[1];
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, width) {
    //empiezo con el trazo o path
    console.log(xinicial, yinicial, xfinal, yfinal)
    lienzo.beginPath();
    //defino colo de la linea
    lienzo.strokeStyle = color;
    //Gestionar el grosor de la linea
    lienzo.lineWidth = width;
    //me muevo en el lienzo
    lienzo.moveTo(xinicial, yinicial);
    //hago una linea desde ese punto a los puntos indicados
    lienzo.lineTo(xfinal, yfinal);
    //Ejecuto el trazo
    lienzo.stroke();
    //Paro de trazar si yo no cierro el Path la proxima linea la va a iniciar desde ese punto donde terminó el ultimo trazo
    lienzo.closePath();
}

function presionarMouse(evento) {
    estado = true;
    //coordenadas mouse
    x = evento.layerX;
    y = evento.layerY;

}

function levantarMouse(evento) {
    estado = false;
}


function moverMouse(evento) {
    let colorfull;
    if (estado == true) {
        if (elementolapiz == true) {
            colorfull = document.getElementById('color').value
        } else {
            colorfull = "white";
        }

        let tamanopincel = document.getElementById('tamano').value;
        //coordenadas mouse
        x2 = evento.layerX;
        y2 = evento.layerY;
        dibujarLinea(colorfull, x, y, x2, y2, paper, tamanopincel);
        //Volver a asignar los valores x o y luego de llamar la función, dibujar linea nos sirve para guardar la ultima posición del mouse luego de dibujo
        //Por lo que no queda siempre en el mismo punto de origen
        x = evento.layerX;
        y = evento.layerY;
    } else {
        x = evento.layerX;
        y = evento.layerY;
    }
}
function lapiz() {
    elementolapiz = true;
    square.style.cursor = "url('img/cursors/Blue Pencil 1 Normal.cur'), auto";
}

function borrador() {
    console.log("borrador")
    elementolapiz = false;
    square.style.cursor = "url('img/cursors/Eraser.cur'), auto";
}

function borrar() {
    paper.clearRect(0, 0, square.width, square.height);
}

function guardarImagen() {
    //let image = square.toDataURL("image/png").replace("image/png", "image/octet-stream");
    //window.location.href = image;
    let image = square.toDataURL("image/png").replace(/^data:image\/[^;]/, "data:application/octet-stream");
    download.setAttribute("href", image);

}
