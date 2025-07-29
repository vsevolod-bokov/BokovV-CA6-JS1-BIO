// ask and assign player name
  let playername = prompt('Welcome to Bear, Hunter, Ninja! Please enter your name to get started: ');

  // assign confirmation message of player's name to variable with escaped single quote
  let playernameconf = `Hi ${playername}, let\'s play!`;

  // show player name confirmation message
  alert(playernameconf);

  // ask and assign player type
  let playertype = prompt('Who are you: Bear, Ninja, or Hunter?');

  // hard assign Bear to computer's player type
  let computertype = "Bear";

  // store confirmation messages to variables used below in html and in console
  let playertypeconf = `${playername}, you picked ${playertype}!`;
  let computertypeconf = `The computer chose ${computertype}!`;

  // log variables to console
    console.log(playertypeconf);
    console.log(computertypeconf);