var canvas;
var ctx;
var WIDTH = 500;
var HEIGHT = 500;
var mouse_click = false;

var p0;
var p1;
var p2;

var angleA;
var angleB;
var angleC;
var anguloA;
var anguloB;
var anguloC;
var ladoA;
var ladoB;
var ladoC;
var sAngulos;

var ponte_tamanho;
var pt2;
var desenhado = false;
var altura1;

var p1x = WIDTH/2;var p1y = HEIGHT/2;var p2x = (WIDTH/4)*3;var p2y = HEIGHT/2;
var x = p1x+((p2x-p1x)/2);
var y = p1y+(p2x-p1x);

var text1 = new Image();
text1.src = 

"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBY

QERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wA

ARCAAoABQDAREAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAABAUCBgEDB//EACcQAAEDAgUCBwAAAAAAAAAAAAECAwQAEQUSISJxMoEGFDFBgpKh/8QAG

QEAAgMBAAAAAAAAAAAAAAAAAgMAAQQH/8QAHREBAQEBAAEFAAAAAAAAAAAAAQARAiESIkFRcf/aAAwDAQACEQMRAD8A6J4flkFByIHJrind1/onmJy7sEZW

zpY60kAfEBzjUWZKKZCgAgVrPJaQ8fM0wSY4kJISkftL7yUk2nYg4pgiyOLUsDYcqbNkL8wrQD4mtQYWjnMt+FyXwkblW9rCq6/IUI

+TLeU2RmXzalm/UOFW5TzpeV1nsKdODCjDnupKdwT2NElMiXsRdyndrwaDKvTJ3pzgcO4nhJpoEdlt

+QhXqocJqnKZTclyCjrX9ahlQZDFx5JtdwcAVftIr//Z";

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.fill();
}

function clear() {
 ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 return setInterval(draw, 10);
}

function draw() {
 clear();
 Desenhar_Triangulo();
 Contas();
 Informacoes();
 /*document.getElementById("InformacoesDispositivo").innerHTML = */
 Desafio();
 Desenhar_Personagem();
}

function Iniciar_App()
{
 document.getElementById("Menu").style.float="right";
 document.getElementById("canvas").style.visibility="visible";
 document.getElementById("posicionar").style.visibility="visible";
 document.getElementById("gerardesafio").style.visibility="visible";
 remove("Ini");
 document.getElementById("respostas").style.visibility="visible";
 document.getElementById("Mostrar").style.visibility="visible";
}

function Gerar_Desafio()
{
desenhado = false;
}

function Desafio()
{
  if(desenhado == false)
{
  altura1 = Math.random() * HEIGHT;
  desenhado = true;
}
  ctx.beginPath();
  ctx.rect(WIDTH-40, HEIGHT-36, 20, -altura1);
  ctx.fillStyle = ctx.createPattern(text1, 'repeat') ;
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
}


function posicionar()
{
 p1x = WIDTH-40;
 p1y = HEIGHT-altura1-36;
 p2x = WIDTH-40;
 p2y = HEIGHT-36;
}


function Desenhar_Triangulo()
{
 ctx.fillStyle = "#444444";
 circle(x, y, 5);
 circle(p1x, p1y, 5);
 circle(p2x, p2y, 5);
 ctx.fillStyle = "transparent";
 ctx.strokeStyle = 'text1';
 ctx.lineWidth   = 1;
 ctx.beginPath();
 ctx.moveTo(p1x,p1y);
 ctx.lineTo(p1x,p1y);
 ctx.lineTo(p2x,p2y);
 ctx.lineTo(x,y);
 ctx.lineTo(p1x,p1y);
 ctx.fill();
 ctx.stroke();
 ctx.closePath();

 ctx.fillStyle = "black";
 ctx.font = "16px Arial";

 ctx.fillText("AA", p1x-30, p1y);
 ctx.fillText("AB", p2x+10, p2y);
 ctx.fillText("AC", x + 10, y);

 ctx.beginPath();
 ctx.rect(0, HEIGHT-36, WIDTH, 36);
 ctx.fillStyle = 'green';
 ctx.fill();
 ctx.strokeStyle = "#000";
 ctx.stroke();
}
var carregou = false;
function Desenhar_Personagem()
{
  if(carregou == false)
{
  var imageObj = new Image();
  imageObj.src = "data:image/png;base64,123"}
ctx.drawImage(imageObj, WIDTH/2-100, HEIGHT-85);
}
function Informacoes()
{
 document.getElementById("AA").value = anguloA + "°";
 document.getElementById("AB").value = anguloB + "°";
 document.getElementById("AC").value = anguloC + "°";
 document.getElementById("LA").value = ladoA + "px";
 document.getElementById("LB").value = ladoB + "px";
 document.getElementById("LC").value = ladoC + "px";
}

function Contas()
{
p0 = { 'x': p1x, 'y': p1y };
p1 = { 'x': p2x, 'y': p2y };
p2 = { 'x': x, 'y': y };

angleA = find_angle(p2,p1,p0);
angleB = find_angle(p2,p0,p1);
angleC = find_angle(p1,p0,p2);

anguloA = angleA * (180/Math.PI);
anguloB = angleB * (180/Math.PI);
anguloC = angleC * (180/Math.PI);

ladoA = Math.sqrt(((x-p2x)*(x-p2x)) + ((y-p2y)*(y-p2y)));
ladoB = Math.sqrt(((x-p1x)*(x-p1x)) + ((y-p1y)*(y-p1y)));
ladoC = Math.sqrt(((p2x-p1x)*(p2x-p1x)) + ((p2y-p1y)*(p2y-p1y)));

}

function find_angle(p0,p1,c) {
    var p0c = Math.sqrt(Math.pow(c.x-p0.x,2)+
                        Math.pow(c.y-p0.y,2)); // p0->c (b)   
    var p1c = Math.sqrt(Math.pow(c.x-p1.x,2)+
                        Math.pow(c.y-p1.y,2)); // p1->c (a)
    var p0p1 = Math.sqrt(Math.pow(p1.x-p0.x,2)+
                         Math.pow(p1.y-p0.y,2)); // p0->p1 (c)
    return Math.acos((p1c*p1c+p0c*p0c-p0p1*p0p1)/(2*p1c*p0c));
}

function remove(id)
{
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}

function Fechar()
{
  document.getElementById("Ajuda").style.visibility="hidden";
  document.getElementById("BotaoFechar").style.visibility="hidden";
}
 
function Mostrar()
{
  document.getElementById("Ajuda").style.visibility="visible";
  document.getElementById("BotaoFechar").style.visibility="visible";
}

function myMove(e){
 if (mouse_click){
  x = e.pageX - canvas.offsetLeft;
  y = e.pageY - canvas.offsetTop;
 }
}

function myMoveA(e){
 if (mouse_click){
  p1x = e.pageX - canvas.offsetLeft;
  p1y = e.pageY - canvas.offsetTop;
 }
}

function myMoveB(e){
 if (mouse_click){
  p2x = e.pageX - canvas.offsetLeft;
  p2y = e.pageY - canvas.offsetTop;
 }
}

function myDown(e){
 if (e.pageX < x + 15 + canvas.offsetLeft && e.pageX > x - 15 +
 canvas.offsetLeft && e.pageY < y + 15 + canvas.offsetTop &&
 e.pageY > y -15 + canvas.offsetTop){
  x = e.pageX - canvas.offsetLeft;
  y = e.pageY - canvas.offsetTop;
  mouse_click = true;
  canvas.onmousemove = myMove;
 }

 if (e.pageX < p1x + 15 + canvas.offsetLeft && e.pageX > p1x - 15 +
 canvas.offsetLeft && e.pageY < p1y + 15 + canvas.offsetTop &&
 e.pageY > p1y -15 + canvas.offsetTop){
  p1x = e.pageX - canvas.offsetLeft;
  p1y = e.pageY - canvas.offsetTop;
  mouse_click = true;
  canvas.onmousemove = myMoveA;
 }
 if (e.pageX < p2x + 15 + canvas.offsetLeft && e.pageX > p2x - 15 +
 canvas.offsetLeft && e.pageY < p2y + 15 + canvas.offsetTop &&
 e.pageY > p2y -15 + canvas.offsetTop){
  p2x = e.pageX - canvas.offsetLeft;
  p2y = e.pageY - canvas.offsetTop;
  mouse_click = true;
  canvas.onmousemove = myMoveB;
 }


}

function myUp(){
 mouse_click = false;
 canvas.onmousemove = null;
}

init();
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;

var touch = false;
canvas.addEventListener("touchstart", myTouch, false);

function myTouch(e){
 if (event.targetTouches[0].pageX < x + 15 + canvas.offsetLeft && event.targetTouches[0].pageX > x - 15 +
 canvas.offsetLeft && event.targetTouches[0].pageY < y + 15 + canvas.offsetTop &&
 event.targetTouches[0].pageY > y -15 + canvas.offsetTop){
  x = event.targetTouches[0].pageX - canvas.offsetLeft;
  y = event.targetTouches[0].pageY - canvas.offsetTop;
  touch = true;
  canvas.ontouchmove = myMoveTouch;
 }

}

function myMoveTouch(e){
 if (touch){
  x = event.targetTouches[0].pageX - canvas.offsetLeft;
  y = event.targetTouches[0].pageY - canvas.offsetTop;
 }
}
