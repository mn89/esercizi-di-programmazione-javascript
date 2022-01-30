/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
var totaleNumeriPassati=5;


var a = parseInt(Math.random()*100);

var b = parseInt(Math.random()*100);

var c = parseInt(Math.random()*100);

var d = parseInt(Math.random()*100);

var e = parseInt(Math.random()*100);


console.log('Input: a = '+a+ ', b = '+ b + ', c = '+ c + ', d = '+ d + ', e = '+ e);

var somma = a+b+c+d+e;
var media= somma/totaleNumeriPassati;

console.log('Output: somma = '+ somma + ', media = '+ media);

