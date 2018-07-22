/*globals console */
'use strict';
console.log('Script start');

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');



ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 20, 70, 50);

ctx.fillStyle = "rgb(0,200,0)";
ctx.fillRect (30, 40, 50, 50);
