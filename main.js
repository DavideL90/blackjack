//Creo una variabile per contenere la "carta" scelta dal pc.
computerNumber = Math.floor((Math.random() * 21) + 1);
//Creo un ciclo per far chiedere una carta all'utente
totalScore = 0; //variabile per memorizzare il punteggio toale dell'utente
anotherRound = true; //variabile per memorizzare la scelta dell'utente di continuare
do{
  alert("Prendi una carta");
  var userCard = Math.floor((Math.random() * 10) + 1);
  alert("Hai pescato un: " + userCard);
  totalScore = totalScore + userCard;
  if(totalScore < 21){
    var userChoice = prompt("Vuoi continuare? Scrivi si oppure no");
    if(userChoice == "no"){
      anotherRound = false;
    }
  }
}while((anotherRound) && (totalScore <= 21))
//Verifico se il giocatore ha vinto
if(totalScore > 21){
  document.write("Mi dispiace ma hai perso! Hai fatto: " +totalScore);
}
else if(computerNumber > totalScore){
  document.write("Mi dispiace ma il computer ha vinto con un punteggio di: " + computerNumber + " Il tuo punteggio è stato di: " + totalScore);
}
else if(computerNumber < totalScore){
  document.write("Complimenti hai vinto con un punteggio di: " + totalScore + " Il punteggio del computer è stato di: " + computerNumber);
}
else{
  document.write("Tu e il computer avete pareggiato con un punteggio di: " + totalScore);
}
