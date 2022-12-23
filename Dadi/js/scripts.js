const userNumber = Math.floor(Math.random() * 6 + 1);
const pcNumber = Math.floor(Math.random() * 6 + 1);

console.log('userNumer', userNumber, typeof userNumber);
console.log('pcNumber', pcNumber, typeof pcNumber);

if (userNumber > pcNumber) {
    alert('Hai vinto!');
    console.log('Utente vince con numero', userNumber);
    console.log('PC perde con numer', pcNumber);
}
else if (userNumber < pcNumber) {
    alert('Hai perso...');
    console.log('Utente perde con numero', userNumber);
    console.log('PC vince con numer', pcNumber);
}
else {
    alert('pareggio');
    console.log('Utente e PC pareggiano con numero', userNumber);
}