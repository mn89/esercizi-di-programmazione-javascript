/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var today= new Date();
var annoCorrente= today.getFullYear();
var annoNascita= parseInt(Math.random() * (annoCorrente-1900)) +1900; //con il metodo [Math.random() * (max-min)) +min] genero un numero casuale tra 2 valori precisi 

console.log('Input: anno corrente = '+ annoCorrente + ', anno di nascita = '+ annoNascita);


var eta= annoCorrente-annoNascita;

var anniPerCento= 100 - eta;

console.log('Output: età ='+ eta + ', anni per arrivare a 100 = '+ anniPerCento);
