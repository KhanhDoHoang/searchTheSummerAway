"use strict";

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particleArray = []; //handle mouse

var mouse = {
  x: null,
  y: null,
  radius: 100
};
window.addEventListener('mouseover', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse.x, mouse.y);
});
ctx.fillStyle = "white";
ctx.font = '40px Verdana';
ctx.fillText('Search the Summer Away', 60, 100);
ctx.font = "30px Verdana"; // var c = document.getElementsByTagName('canvas')[0];
// var ctext = c.getContext('2d');