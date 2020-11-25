// PLAYER FUNCTIONS //

// Player object
class Player {
   constructor (name, level, xp, xps, end, str, inte, dext, hp, mp, equipped, armor, ac, inv, x, y, traveled, killed, hit, miss, spells, maxHp, maxMp, camps){
     this.name = name;
     this.level = level;
     this.xp = xp;
     this.xps = xps;
     this.end = end;
     this.str = str;
     this.inte = inte;
     this.dext = dext;
     this.hp = hp;
     this.mp = mp;
     this.equipped = equipped;
     this.armor = armor;
     this.ac = ac;
     this.inv = inv;
     this.x = x;
     this.y = y;
     this.traveled = traveled;
     this.killed = killed;
     this.hit = hit;
     this.miss = miss;
     this.spells = spells;
     this.maxHp = maxHp;
     this.maxMp = maxMp;
     this.camps = camps;
   }

   mainStats(){
     let health = 35, mana = 35;
     health = health + (this.end * 3);
     mana = mana + (this.inte * 3);
     this.maxHp = health;
     this.hp = health;
     this.maxMp = mana;
     this.mp = mana;
   }

   setAc(){
     this.ac = this.armor.ac + 8;
   }

   equipWeapon(pizza){
    console.log("ALERT! Function is starting")
    console.log(pizza)
    this.equipped = pizza;
    console.log("It has worked")
    $('#head').after('<div class="alert alert-success alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Success!</strong> '+ pizza.name +' has been equipped!</div>');

   }

  equipArmor(pizza) {
    console.log("ALERT! Function is starting")
    console.log(pizza)
    this.armor = pizza;
    console.log("It has worked")
    $('#head').after('<div class="alert alert-success alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Success!</strong> '+ pizza.name +' has been equipped!</div>');
    this.setAc();
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
    }
  }

 // INVENTORY OBJECT //
var inventory = {
  items: [],
  potions: [health1, health2, health3, mana1, mana2, mana3],
  gold: 1000,
  limit: 9,

  minusPotion: function(item){
    for (i = 0; i < this.potions.length; i++){
      if (this.potions[i] == item){
        this.potions[i].number -= 1;
        console.log("One removed")
      }
    }
  },
  plusPotion: function(item){
    for (i = 0; i < this.potions.length; i++){
      if (this.potions[i] == item){
        this.potions[i].number += 1;
        console.log("One added")
      }
    }
  },
  add: function(item){
    // If there ar eno items, just push
    if (this.items.length == 0){
      this.items.push(item);
    } 
    // Else we need to chekc if there already exists that item
    else {
      let flag = false;
      for (i = 0; i <= (this.items.length - 1); i++){
        if (item == this.items[i] ){
          this.items[i].number += 1;
          flag = true;
        }
      }
      // If none are the same, just push
      if (flag == false) {
        this.items.push(item);
      }
    }
  },
  remove: function(item){
    let i = 0;
    for (i = 0; i < this.items.length; i++){
      if (item.name == this.items[i].name){
        console.log("Starting number: " + this.items[i].number)
        if (this.items[i].number > 1) {
          this.items[i].number -=1
          console.log("Ending number: " + this.items[i].number);
        }
        else if (this.items[i].number <= 1) {
          this.items.pop(item);
          console.log("Removed");
        }
      }
    }
  },

  buy: function(item, quantity){
    cost = getCost(item);
    if (this.gold >= cost) {
      if (this.items.length == 9){
        alert("You dont have enough space!");
      } else {
        this.gold = this.gold - cost;
        while (quantity > 0){
          this.add(item);
          quantity = quantity -1;
        }
      }
    } else {
      alert("You do not have enough money!")
    }
  }
};

// Defines stats automnatically in case user doesnt input their own
function defineStats(){
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

// Player variable and set up
var me = new Player('Hero', 1, 0, 0, defineStats(), defineStats(), defineStats(), defineStats(), 35, 35, sword, clothArmor, 8, inventory, 11, 5, 0, 0 ,0, 0, 0, 0, 0, 3);
me.mainStats();
me.setAc();

inventory.add(sword);
inventory.add(clothArmor);

// This function unlocks the spells
let levelUnlock = () => {
  if (me.level == 3) {
    playerSpells[1] = 1;
    return iceShard;
  } else if (me.level == 6){
    playerSpells[2] = 1;
    return healingHands;
  } else if (me.level == 9){
    playerSpells[3] = 1;
    return deathlyTouch;
} else if (me.level == 12){
    playerSpells[4] = 1;
    return regenerate;
} else if (me.level == 15){
    playerSpells[5] = 1;
    return lightning;
} else if (me.level == 18){
    playerSpells[6] = 1;
    return hellFire;
} else if (me.level == 21){
    playerSpells[7] = 1;
    return arcaneMissiles;
} else if (me.level == 24){
    playerSpells[8] = 1;
    return rebirth;
} else if (me.level == 27){
    playerSpells[9] = 1;
    return godsMight;
} else if (me.level == 30){
    playerSpells[10] = 1;
    return damn;
  } else {
    return 'Nothing';
  }
}