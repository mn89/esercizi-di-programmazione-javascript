/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var numeroCasaule =parseInt(Math.random()*10000); //genero un numero casuale con Math.random() tra 0 e 100000 e prendo la parte intera con parseInt()
console.log("Input: "+ numeroCasaule);


var ore= parseInt(numeroCasaule/3600); //trovo il numero delle ore
var resto_ore= numeroCasaule%3600; //trovo il numero ridotto dei minuti


var minuti= parseInt(resto_ore/60); //trovo il numero dei minuti 


var secondi= resto_ore%60; //trovo il numero ridotto dei secondi e quindi i secondi stessi






console.log("Output: " + ore +" h, "+ minuti + " min, "+ secondi + " sec."); 