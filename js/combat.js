// COMBAT FUNCTIONS //
// Put all combat calcs into one object

var Combat = {
  
  hit : function(object){
    let chance = diceRoll(20);
    console.log("Initial chance = " + chance)
    if (object.name != me.name){
      chance += Math.round(me.dext / 10)
      console.log("Chance after bonus = " + chance)
    }
    if (chance >= object.ac) {
      return true;
    }
    else {
      return false;
    }
  },

  enemyAttack : function(enemy) {
    let hitChance = this.hit(me);
    // If the attack hits
    if (hitChance == true){
      let random = Math.floor(Math.random() * enemy.attacks.length);
      let attack = enemy.attacks[random]
      console.log("ENEMY ATTACK IS " + attack)
      // If the attack is just using their weapon
      if (attack == weapon){
        let dmg = enemy.equipped.attack();
        let txt = enemy.name + " attacks and does " + dmg + " damage!";
        console.log(txt);
        Battle.addText(txt, 'hurt');
        me.hp = me.hp - dmg;
        if (me.hp <= 0) {
          this.lose()
        } 
        //Other Attacks
      } else {
        // If a spell
        if (attack instanceof Spell){
          let dmg = attack.attack();
          let txt = enemy.name + " casts " + attack.name + " and does " + dmg + " damage!";
          Battle.addText(txt, 'hurt')
          me.hp = me.hp - dmg;
          enemy.mp -= attack.cost;
          if (me.hp <= 0) {
            this.lose()
          } 

        } 
        // Normal Attacks
        else {
          let dmg = attack.dmg();
          let txt = enemy.name + " " + attack.name + " and does " + dmg + " damage!";
          Battle.addText(txt, 'hurt')
          me.hp = me.hp - dmg;
          if (me.hp <= 0) {
            this.lose()
          } 
        }
      } 
    } else {
      let txt = enemy.name + " attacks, but you dodge!";
      console.log(txt);
      Battle.addText(txt, 'dodge');
    }
  },

  playerAttack : function(enemy) {
    let hitChance = hit(enemy);
    if (hitChance == true) {
      me.hit += 1;
      let dmg = me.equipped.attack();
      let extra = me.str * .25;
      extra = Math.round(extra);
      dmg = dmg + extra;
      let text = "You do " + dmg + " damage!";
      console.log(text);
      Battle.addText(text, 'hit');
      enemy.hp = enemy.hp - dmg;
      Battle.battlePage();
    }
    else {
      me.miss += 1;
      let text = "You've attacked, but the enemy dodges!";
      Battle.addText(text, 'miss');
    }
    if (enemy.hp <= 0){
        this.win()
      }
    else {
      this.enemyAttack();
      Battle.battlePage();
    }
  },

  castSpell : function(spell, enemy) {
    //Checks if its a healing spell
    if (spell instanceof HealingSpell){
      // Yes Healing
      if (me.mp >= spell.cost) {
        let heal = spell.attack();
        let extra = me.inte * .25;
        extra = Math.round(extra);
        heal = heal + extra;
        me.mp = me.mp - spell.cost;
        Battle.addText("You cast " + spell.name + " to heal for a total of " + heal + "!", 'hit')
        if ((me.hp + heal) > me.maxHp){
          me.hp = me.maxHp; // if heal would be over max health
        } 
        else {
          me.hp = me.hp + heal; // add heal to health
        }
        this.enemyAttack();
        Battle.battlePage();
        } else {
          alert("You do not have enough mana!");
          return;
        }
    } else {
      // Attack Spell
      if (me.mp >= spell.cost) {
        let hitChance = this.hit(enemy);
        if (hitChance == true) {
          let dmg = spell.attack();
          let extra = me.inte * .25;
          extra = Math.round(extra);
          dmg = dmg + extra;
          me.mp = me.mp - spell.cost;
          Battle.addText("You cast " + spell.name + " and do " + dmg + "!", 'hit')
          enemy.hp = enemy.hp - dmg;
          Battle.battlePage();
        }
        else{
          Battle.addText("You cast " + spell.name + " but you miss!", 'miss');
          me.mp = me.mp - spell.cost;
        }
        if (enemy.hp <= 0){
            this.win()
          }
        else {
          this.enemyAttack();
          Battle.battlePage();
        }
      } 
      else {
        alert("You do not have enough mana!");
        return;
      }
    }
    me.spells += 1; 
  },

  win : function(){
    me.killed += 1;
    me.xp = me.xp + enemy.xp;
    // If player has enough to level up
    if (me.xp >= cap){
      levelUpScreen();
    // Otherwise usual victory
    } else {
      console.log("XP: " + me.xp);
      let perc = (me.xp / cap) * 100;
      me.xpPerc = perc;
      battleTime = false;
      Battle.winScreen();
    }
  },

  lose : function() {
    alert("You have lost!");
    location.reload(); // Reload page on lose
  },

  chooseItem : function(item) {
    me.useItem(item);
    if (item instanceof HealingItem){
      Battle.addText("You used a " + item.name + " and healed for " + item.bonus, 'hit');
    } else if (item instanceof ManaItem){
      Battle.addText("You used a " + item.name + " and restored " + item.bonus + " mana", 'hit');
    }
    this.enemyAttack();
    Battle.battlePage();
  },

  loot : function(enemy) {
    let g = (Math.floor(enemy.maxHp / 10)) * 2;
    me.inventory.gold += g;
    return g;
  },

  escape : function() {
    let chance = randomChance();
    chance += Math.round(me.dext * .5);
    console.log("Escape chance is " + chance + "%");

    if (chance > 65) {
      alert("You have escaped the battle!");
      GameManager.standby();
    } else {
      let a = "You try to escape, but you failed!";
      Battle.addText(a);
      this.enemyAttack();
      Battle.battlePage();
    }
  }

}





