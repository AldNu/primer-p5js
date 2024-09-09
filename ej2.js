//Cambiar el color de los cuadrados usando la tecla derecha y la tecla izquierda del mouse 
//El color del fondo cambia con las flechas Left, Up y Down, tocar cualquier otra hace que vuelva a su valor original
let rojoMouse, verdeMouse, azulMouse;
let azulTec=217;
let rojoTec=245;
let verdeTec=240;

function setup() {
  createCanvas(506, 512);
}

function draw() {
  //CAMBIAR EL COLOR DEL FONDO
   noStroke();
  background(rojoTec, verdeTec , azulTec);
  fill(227, 224, 213);
  rect(0, 0, 255, 255);

  fill(rojoTec, verdeTec , azulTec);
  rect(0, 0, 125, 125);

  fill(227, 224, 213);
  rect(0, 0, 62.5, 62.5);
  
  if (keyIsPressed) {//SI SE SELECCIONA UNA TECLA SE EVALUA CUAL FUE
    if (keyCode == UP_ARROW) {
      azulTec--;
    } else if (keyCode==DOWN_ARROW) {
      rojoTec--;
    }
     else if (keyCode==LEFT_ARROW) {
      verdeTec--;
    }
    else{
      azulTec=217;
      rojoTec=245;
      verdeTec=240;
    }
  }

  
  

  //deshabilito la funcion de menu del boton derecho
  document.oncontextmenu = function () {
    return false;
  };

  //CAMBIA EL COLOR DE LOS CUADRADOS
  rojoMouse = pmouseX % 255;
  verdeMouse = pmouseY % 255;
  azulMouse = (pmouseY + pmouseX) % 255;
  fill(50);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      fill(frameCount % 255);
    } else if (mouseButton == RIGHT) {
      fill(rojoMouse, verdeMouse, azulMouse);
    }
  }
  

  quad(337, 166, 506, 339, 337, 512, 166, 339);

  quad(166, 84, 255, 168, 166, 255, 80, 168);

  quad(84, 40, 125, 83, 84, 125, 40, 83);

  quad(40, 19, 62.5, 40, 40, 62.5, 18, 40);
}
