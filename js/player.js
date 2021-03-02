// PLAYER FUNCTIONS //

class Stats {
  constructor(){
    this.traveled = 0;
    this.killed = 0;
    this.hit = 0;
    this.miss = 0;
    this.spells = 0;
  }
}

// Player object
class Player extends Stats {
   constructor (name, equipped, armor, x, y, camps){
     super();
     this.name = name;
     this.level = 1;
     this.xp = 0;
     this.cap = this.setXpCap();
     this.xpPerc = 0;
     this.end = this.defineStats();
     this.str = this.defineStats();
     this.inte = this.defineStats();
     this.dext = this.defineStats();
     this.hp = 35;
     this.mp = 35;
     this.equipped = equipped;
     this.armor = armor;
     this.ac = 0;
     this.setAc();
     this.x = x;
     this.y = y;
     this.maxHp = 0;
     this.maxMp = 0;
     this.camps = camps;
     // List of abilities and what level to unlock
     this.abilityList = {
      3 : iceShard,
      5 : healingHands,
      7 : deathlyTouch,
      9 : regenerate,
      10 : lightning,
      12 : hellFire,
      14 : arcaneMissiles,
      16 : rebirth,
      18 : godsMight,
      20 : damn }
      // list of current abilities
     this.abilities = [fireBall, iceShard, deathlyTouch];
     this.mainStats();
   }
   setXpCap(){
    let newCap = (this.level * 100)/2;
    return newCap;
   }
   defineStats(){
      var one =1, two=1, three=1, four=1, total=1;
      one = diceRoll(6);
      two = diceRoll(6);
      three = diceRoll(6);
      four = diceRoll(6);

      total = one + two + three + four;
      var min = Math.min(one, two, three, four);
      total = total - min;

      return total;
    }

   mainStats(){
     let health = this.hp + (this.end * 3);
     let mana = this.mp + (this.inte * 3);
     this.maxHp = health;
     this.hp = health;
     this.maxMp = mana;
     this.mp = mana;
   }

   setAc(){
     this.ac = this.armor.ac + 8;
   }

   equipWeapon(weapons){
    console.log("ALERT! Function is starting")
    console.log(weapons)
    this.equipped = weapons;
    console.log("It has worked")
   }

  equipArmor(armors) {
    console.log("ALERT! Function is starting")
    console.log(armors)
    this.armor = armors;
    console.log("It has worked")
    this.setAc();
  }

  checkUnlock(){
    if (this.level in this.abilityList){
      return true;
    } else {
      return false;
    }
  }

  levelUp() {
    let a = diceRoll(3);
    let b = diceRoll(3);
    let c = diceRoll(3);
    let d = diceRoll(3);

    this.end += a;
    this.dext += b;
    this.str += c;
    this.inte += d;

    this.maxHp += (d * 5)
    this.maxMp += (a * 5)
    this.hp = this.maxHp;
    this.mp = this.maxMp;

    if (this.checkUnlock() === true){
      let x = this.level;
      let newAbility = this.abilityList[x];
      this.abilities.push(newAbility);
      return newAbility;
    } else {
      return "Nothing";
    }
  }

  rest() {
    if (this.camps > 0){
      let total = 0, i = 0;
      for (i=0; i<7; i++){
        total = diceRoll(10) + total;
      }

      if ((this.hp + total) > this.maxHp){
        this.hp = this.maxHp;
        if ((this.mp + total) > this.maxMp){
          this.mp = this.maxMp;
          alert("You have fully rested!");
        }
        else {
          this.mp = this.mp + total;
          alert("You have rested!");
        }
      } else {
        this.hp = this.hp + total;
        if ((this.mp + total) > this.maxMp){
          this.mp = this.maxMp;
          alert("You have rested!");
        }
        else {
          this.mp = this.mp + total;
          alert("You have rested!");
        }
      }

      this.camps -= 1;
      GameManager.standby();
    }
    else {
      alert("You do not have enough supplies to set up camp!");
    }
  }

  buyItem(item, quantity) {
    let cost = item.cost() * quantity;
    if (this.inventory.gold >= cost) {
      this.inventory.gold = this.inventory.gold - cost;
      for (let i = 0 ; i < quantity; i++){
        if (item instanceof HealingItem || item instanceof ManaItem ){
          this.inventory.plusPotion(item);
        } else {
          this.inventory.add(item);
        }
      }
    } else {
      alert("You do not have enough money!")
    }
  }

  useItem(potion) {
    if (potion instanceof HealingItem){
      if ((this.hp + potion.bonus) > this.maxHp) {
        this.hp = this.maxHp;
        console.log("Healed to full health");
        alert("You have healed to full health!");
      } else {
        this.hp = this.hp + potion.bonus
        console.log("Healed " + potion.bonus)
        alert("You have healed for " + potion.bonus + " health points!");
      }
    }
    if (potion instanceof ManaItem){
      if ((this.mp + potion.bonus) > this.maxMp) {
        this.mp = this.maxMp;
        console.log("Restored to full mana");
        alert("You have restored all of your mana!");
      } else {
        this.mp = this.mp + potion.bonus
        console.log("Restored " + potion.bonus + " mana")
        alert("You have restored " + potion.bonus + " mana!");
      }
    }
    potion.number -= 1;
    console.log("removed")
  }

  sellItem(item) {
    console.log('selling...')
    this.inventory.gold += item.value;
    this.inventory.remove(item);
    console.log('sold')
    // check if equipped weapon
    if (item == this.equipped){
      this.equipped = noWeapon;
      console.log("Removed weapon")
    }
    // check if equipped armor
    if (item == this.armor){
      this.armor = noArmor;
      console.log("Removed Armor")
    } 
  }

  discover(){
    if (visited[me.x][me.y] === 'Undiscovered'){
      visited[me.x][me.y] = (map[me.x][me.y].name);
    } else {
      return;
    }
  }

  loc(){
    return map[this.x][this.y];
  }
  travel(direction) {
    // 1 = north
    // 2 = south
    // 3 = east
    // 4 = west
    if (direction == 1) {
      if (this.x == 0){
        alert("Cannot travel further north!");
        return;
      } else {
        this.x = this.x - 1;
        console.log("X: " + this.x + " Y: " + this.y);
        this.discover();
        this.traveled += 1;
        let newPlace = this.loc();
        console.log("New location: " + newPlace.name);
        newPlace.ambush();
      }
    }
    else if (direction == 2) {
      if (this.x == 11){
        alert("Cannot travel further south!");
        return;
      } else {
        this.x = this.x + 1;
        console.log("X: " + this.x + " Y: " + this.y);
        this.discover();
        this.traveled += 1;
        let newPlace = this.loc();
        console.log("New location: " + newPlace.name);
        newPlace.ambush();
      }
    }
    else if (direction == 3) {
      if (this.y == 8){
        alert("Cannot travel further east!");
        return;
      } else {
        this.y = this.y + 1;
        console.log("X: " + this.x + " Y: " + this.y);
        this.discover();
        this.traveled += 1;
        let newPlace = this.loc();
        console.log("New location: " + newPlace.name);
        newPlace.ambush();
      }
    }
    else if (direction == 4) {
      if (this.y == 0) {
        alert("You cannot travel further west!");
        return;
      } else {
        this.y = this.y - 1;
        console.log("X: " + this.x + " Y: " + this.y);
        this.discover();
        this.traveled += 1;
        let newPlace = this.loc();
        console.log("New location: " + newPlace.name);
        newPlace.ambush();
      }
    }
    if (GameManager.battleTime == false) {
      console.log("X = " + this.x);
      console.log("y = " + this.y);
      GameManager.standby();
    }

  }
// -----  inventotory Object nested in player object -----
  inventory = {
    items: [],
    potions: [health1, health2, health3, mana1, mana2, mana3],
    gold: 1000,

    minusPotion: function(item){
      for (let i = 0; i < this.potions.length; i++){
        if (this.potions[i] == item){
          this.potions[i].number -= 1;
          console.log("One removed")
        }
      }
    },

    plusPotion: function(item){
      for (let i = 0; i < this.potions.length; i++){
        if (this.potions[i] == item){
          this.potions[i].number += 1;
          console.log("One added")
        }
      }
    },

    add: function(item){
      this.items.push(item);
    },

    remove: function(item){
      this.items.pop(item);
    },


    // End functions
  } // End inventory
} // End Player Object

// Player variable and set up
// name, level, xp, xps, equipped, armor, x, y, camps
var me = new Player('Hero', sword, clothArmor, 4, 5, 3);

