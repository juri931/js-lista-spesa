let listaSpesa = [];

let prodotto;

let c = 0;

while(listaSpesa.length < 5){
  
  prodotto = prompt("Inserire prodotto");
  listaSpesa.push(prodotto);
  lista += prodotto;
  console.log(prodotto);
  c++
}

document.getElementById("lista").innerHTML =
  "La tua lista della spesa: "+ listaSpesa + "<br>"+
  "Numero di prodotti inseriti: "+c+"<br>";
console.log(lista)

console.log(listaSpesa);