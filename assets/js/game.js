window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle");

// repeat and execute as long as the enemy-robot is alive 
while(enemyHealth > 0) {

//if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  //remove enemy's health by subtracting the amount set in the playerAttack
  enemyHealth = enemyHealth - playerAttack;
  console.log(playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames[i] + " has died!");
  } else {
    window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
  }

// remove player's health by subtracting the amount set in the enemyAttack variable
   playerHealth = playerHealth - enemyAttack;
   console.log(
    enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

// check player's health
   if (playerHealth <= 0) {
     window.alert(playerName + " has died!");
   } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
   }

// if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
//confirm player wants to skip
   var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Good bye!");
    playerMoney = playerMoney - 2;
  }
  else {
     fight();
  }
  } else {
  window.alert("You need to choose a valid option. Try again!");
  }
 }
}

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(enemyNames[i]);
}