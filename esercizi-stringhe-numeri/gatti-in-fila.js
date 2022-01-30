/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/


var numeroTotaleGatti = parseInt(Math.random()*100);
var gattiInOgniFila = parseInt(Math.random()*100);

console.log('Input: numero di gatti = '+ numeroTotaleGatti+ ' , gatti per fila = '+gattiInOgniFila);

var gattiRestanti = numeroTotaleGatti%gattiInOgniFila;

//  42/6=7


if(gattiRestanti!=0)
{
  var numeroDiFile = Math.ceil(numeroTotaleGatti/gattiInOgniFila);

  /*

  ALTRA POSSIBILE SOLUZIONE CON parseInt() per ottenere il numero di file.
  var numeroDiFile = parseInt(numeroTotaleGatti/gattiInOgniFila)+1

  */

  var gattiMancanti= gattiInOgniFila - gattiRestanti;

  console.log('Output: numero di file = ' +numeroDiFile+', gatti mancanti = '+ gattiMancanti);
}
else 
{
  var numeroDiFile = Math.ceil(numeroTotaleGatti/gattiInOgniFila);
  console.log('Output: numero di file = ' +numeroDiFile);
}

