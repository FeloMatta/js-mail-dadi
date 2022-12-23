const userEmail = prompt('Inserisci la tua email');
console.log('userEmail', userEmail, typeof userEmail);

const members = [
    'giuseppe@classe84.it',      // 0
    'lucia@classe84.it',         // 1
    'emanuela@classe84.it',      // 2
    'paolo@classe84.it',         // 3
    'zineb@classe84.it'          // 4
];

let validEmail = true;
if(validEmail == true) { //controllo fake della email
  
  let canAccess = false;

  for (let i = 0; i < members.length; i++) {

    console.log('members[i]', i, members[i], typeof members[i]);

    if(members[i] == userEmail){
      canAccess = true;
    }

  }

  if(canAccess == true){
      alert('Puoi entrare');
  }
  else{
      alert('Non puoi entrare');
  }

}
else {
  alert('Email non valida, non ti faccio entrare!!!');
}