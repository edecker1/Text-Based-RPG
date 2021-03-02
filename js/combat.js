// COMBAT FUNCTIONS //
// Put all combat calcs into one object

var Combat = {
  
  hit : function(object){
    let chance = diceRoll(20);
    console.log("Initial chance = " + chance)
    if (object.name != me.name){
      console.log("Player attack")
      chance += Math.round(me.dext / 10)
      console.log("Chance after bonus = " + chance)
    }
    console.log("Chance is " + chance + " versus " + object.name + "'s " + object.ac);
    if (chance >= object.ac) {
      return true;
    }
    else {
      return false;
    }
  },

  enemyAttack : function() {
    console.log("Enemy attack")
    let hitChance = this.hit(me);
    console.log("Hitchance is " + hitChance)
    // If the attack hits
    if (hitChance == true){
      let random = Math.floor(Math.random() * Battle.e.attacks.length);
      let attack = Battle.e.attacks[random];
      for (const attack of Battle.e.attacks) {
        console.log(attack.action)
      }
      console.log("Battle.e ATTACK IS " + attack.action)
      // If the attack is just using their weapon
      if (attack == "weapon"){
        let dmg = Battle.e.equipped.attack();
        let txt = Battle.e.name + " attacks and does " + dmg + " damage!";
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
          let txt = Battle.e.name + " casts " + attack.name + " and does " + dmg + " damage!";
          Battle.addText(txt, 'hurt')
          me.hp = me.hp - dmg;
          Battle.e.mp -= attack.cost;
          if (me.hp <= 0) {
            this.lose()
          } 
        } 
        // Normal Attacks
        else {
          let dmg = attack.dmg();
          let txt =Battle.e.name + " " + attack.action + " you and does " + dmg + " damage!";
          Battle.addText(txt, 'hurt')
          me.hp = me.hp - dmg;
          if (me.hp <= 0) {
            this.lose()
          } 
        }
      } 
    } else {
      let txt = Battle.e.name + " attacks, but you dodge!";
      console.log(txt);
      Battle.addText(txt, 'dodge');
    }
  },

  playerAttack : function() {
    let hitChance = this.hit(Battle.e);
    if (hitChance == true) {
      me.hit += 1;
      let dmg = me.equipped.attack();
      let extra = me.str * .25;
      extra = Math.round(extra);
      dmg = dmg + extra;
      let text = "You do " + dmg + " damage!";
      console.log(text);
      Battle.addText(text, 'hit');
      Battle.e.hp = Battle.e.hp - dmg;
      Battle.battlePage();
    }
    else {
      me.miss += 1;
      let text = "You've attacked, but the enemy dodges!";
      Battle.addText(text, 'miss');
    }
    if (Battle.e.hp <= 0){
        this.win()
      }
    else {
      this.enemyAttack();
      Battle.battlePage();
    }
  },

  castSpell : function(spell) {
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
        this.Battle.eAttack();
        Battle.battlePage();
        } else {
          alert("You do not have enough mana!");
          return;
        }
    } else {
      // Attack Spell
      if (me.mp >= spell.cost) {
        let hitChance = this.hit(Battle.e);
        if (hitChance == true) {
          let dmg = spell.attack();
          let extra = me.inte * .25;
          extra = Math.round(extra);
          dmg = dmg + extra;
          me.mp = me.mp - spell.cost;
          Battle.addText("You cast " + spell.name + " and do " + dmg + "!", 'hit')
          Battle.e.hp = Battle.e.hp - dmg;
          Battle.battlePage();
        }
        else{
          Battle.addText("You cast " + spell.name + " but you miss!", 'miss');
          me.mp = me.mp - spell.cost;
        }
        if (Battle.e.hp <= 0){
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
    me.xp = me.xp + Battle.e.xp;
    // If player has enough to level up
    if (me.xp >= me.cap){
      GameManager.levelUp();
    // Otherwise usual victory
    } else {
      console.log("XP: " + me.xp);
      let perc = (me.xp / me.cap) * 100;
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

  loot : function() {
    let g = (Math.floor(Battle.e.maxHp / 10)) * 2;
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





