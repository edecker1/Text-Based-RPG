// COMBAT FUNCTIONS //
// Dice ROll Function
function diceRoll(dice){
  let roll = Math.floor(Math.random() * dice) + 1;
  return roll;
}

// Function to see if it hits
function hit(object){
  let chance = diceRoll(20);
  console.log("Initial chance = " + chance)
  if (object.name != me.name){
    chance += Math.round(me.dext / 10)
    console.log("Chance after bonus = " + chance)
  }
  if (chance >= object.ac) {
    return 1;
  }
  else {
    return 2;
  }
}
// Enemy arrack function
function enemyAttack(){
  let apple = hit(me);
  // If the attack hits
  if (apple == 1){
    let random = Math.floor(Math.random() * enemy.attacks.length);
    let attack = enemy.attacks[random]
    console.log("ENEMY ATTACK IS " + attack)
    // If the attack is just using their weapon
    if (attack == weapon){
      let dmg = enemy.equipped.attack();
      let apple = enemy.name + " attacks and does " + dmg + " damage!";
      console.log(apple);
      continueText(apple, 'hurt');
      me.hp = me.hp - dmg;
      if (me.hp <= 0) {
        lose()
      } 
      //Other Attacks
    } else {
      // If a spell
      if (attack instanceof Spell){
        let dmg = attack.attack();
        let apple = enemy.name + " casts " + attack.name + " and does " + dmg + " damage!";
        continueText(apple, 'hurt')
        me.hp = me.hp - dmg;
        enemy.mp -= attack.cost;
        if (me.hp <= 0) {
          lose()
        } 

      } 
      // Normal Attacks
      else {
        let dmg = attack.dmg();
        let apple = enemy.name + " " + attack.name + " and does " + dmg + " damage!";
        continueText(apple, 'hurt')
        me.hp = me.hp - dmg;
        if (me.hp <= 0) {
          lose()
        } 
      }
    } 
  } else {
    let apple = enemy.name + " attacks, but you dodge!";
    console.log(apple);
    continueText(apple, 'dodge');
  }
}



// Player Attack function
function pAttack(){
  let apple = hit(enemy);
  if (apple == 1) {
    me.hit += 1;
    let dmg = me.equipped.attack();
    let extra = me.str * .25;
    extra = Math.round(extra);
    dmg = dmg + extra;
    let apple = "You do " + dmg + " damage!";
    console.log(apple);
    continueText(apple, 'hit');
    enemy.hp = enemy.hp - dmg;
    battlePage();
  }
  else {
    me.miss += 1;
    let apple = "You've attacked, but the enemy dodges!";
    continueText(apple, 'miss');
  }
  if (enemy.hp <= 0){
      win()
    }
  else {
    enemyAttack();
    battlePage();
  }
}

// Function for when the player beats the enemy
function win(){
  me.killed += 1;
  me.xp = me.xp + enemy.xp;
  // If player has enough to level up
  if (me.xp >= cap){
    levelUpScreen();
  // Otherwise usual victory
  } else {
    console.log("XP: " + me.xp);
    let perc = (me.xp / cap) * 100;
    me.xps = perc;
    battleTime = false;
    winScreen();
  }
}

// When eplayer loses, reload the page
function lose(){
  alert("You have lost!");
  location.reload();
}

// Cast spell function
function cast(spell) {
  var apple;
  //Checks if its a healing spell
  if (spell instanceof HealingSpell){
    apple = 1;
  } else {
    apple = 2;
  }
  me.spells += 1;
  // If spell is not a gealing spell
  if (apple == 2) {
    if (me.mp >= spell.cost) {
      let apple = hit(enemy);
      if (apple == 1) {
        let dmg = spell.attack();
        let extra = me.inte * .25;
        extra = Math.round(extra);
        dmg = dmg + extra;
        me.mp = me.mp - spell.cost;
        continueText("You cast " + spell.name + " and do " + dmg + "!", 'hit')
        enemy.hp = enemy.hp - dmg;
        battlePage();
      }
      else{
        continueText("You cast " + spell.name + " but you miss!", 'miss');
        me.mp = me.mp - spell.cost;
      }
      if (enemy.hp <= 0){
          win()
        }
      else {
        enemyAttack();
        battlePage();
      }
    } 
    else {
      alert("You do not have enough mana!");
      return;
    }
  // If the spell is a healing spell
  } else if (apple == 1){
    if (me.mp >= spell.cost) {
        let dmg = spell.attack();
        let extra = me.inte * .25;
        extra = Math.round(extra);
        dmg = dmg + extra;
        me.mp = me.mp - spell.cost;
        continueText("You cast " + spell.name + " heal for a total of " + dmg + "!", 'hit')
        if ((me.hp + dmg) > me.maxHp){
          me.hp = me.maxHp;
        } else {
          me.hp = me.hp + dmg;
        }
        enemyAttack();
        battlePage();
      } else {
        alert("You do not have enough mana!");
        return;
    }
  }

}

// Uses the item during combat
let chooseItem = (pizza) => {
  useItem(pizza);
  if (pizza instanceof HealingItem){
    continueText("You used a " + pizza.name + " and healed for " + pizza.bonus, 'hit');
  } else if (pizza instanceof ManaItem){
    continueText("You used a " + pizza.name + " and restored " + pizza.bonus + " mana", 'hit');
  }
  enemyAttack();
  battlePage();
}

// Loot for gold after victory. need to implement item loot too
let loot = () => {
  let g = (Math.floor(enemy.maxHp / 10)) * 2;
  inventory.gold += g;
  return g;
}

// Function for player to attempt to escape
let escape = () => {
  let chance = randomChance();
  chance += Math.round(me.dext * .5);
  console.log("Escape chance is " + chance + "%");

  if (chance > 65) {
    alert("You have escaped the battle!");
    standBy();
  } else {
    let a = "You try to escape, but you failed!";
    continueText(a);
    enemyAttack();
    battlePage();
  }
}