// ITEM SCRIPT //

// BASE CLASS //

class Item {
  constructor ( name, description, value){
    this.name = name;
    this.description = description;
    this.value = value;
  }

  cost(){
    let expense = (this.value + Math.round((this.value * 0.25)))
    return expense;
  }
}
// WEAPON CLASS //

class Weapon extends Item {
  constructor (name, description, value, qDice, die){
    super (name, description, value);
    this.qDice = qDice; // quantity of dice
    this.die = die; // die to roll
  }
  
  attack(){
    let i = 0;
    let total = 0;
    for (i = 0; i < (this.qDice); i++){
      total = total + diceRoll(this.die);
    }
    return total;
  }

  minDamage() {
    return this.die;
  }

  maxDamage() {
    return (this.qDice * this.die);
  }
}

// ARMOR CLASS //
class Armor extends Item {
  constructor (name, description, value, ac){
    super (name, description, value);
    this.ac = ac; 
  }
}

// USABLE ITEMS //

class HealingItem extends Item {
  constructor (name, description, value, bonus, number){
    super (name, description, value);
    this.bonus = bonus;
    this.number = number;
  }
}

class ManaItem extends Item {
  constructor (name, description, value, bonus, number){
    super (name, description, value);
    this.bonus = bonus;
    this.number = number;
  }
}
// BEGINNING //
let noWeapon = new Weapon("Fists", "You have no weapon equipped!", 0, 1, 6);
let noArmor = new Armor("Underclothes", "Just plain clothing. No actual armor", 0, 0);
// Weapons //

//player weapons =>
var sword = new Weapon('Iron Sword', 'An old, worn sword.', 100, 2, 4);
var dagger = new Weapon('Dagger', 'A small, sharp dagger.', 50, 1, 4);
var axe = new Weapon('Axe', 'A large axe capable of cleaving through the users enemies.', 75, 3, 4);
let hammer = new Weapon('Hammer', 'A heavy hammer perfect for bashing in skulls', 200, 4, 4);
let bow = new Weapon('Longbow', 'A bow capable of skewering enemies from long range', 400, 4, 6);
let club = new Weapon('Huge Club', 'A slab of wood thats sturdy and heavy.', 300, 3, 6)
// City Weapons
let darkStaff = new Weapon('Dark Staff', 'A staff imbued with dark magics', 1000, 6, 5)
let battleAxe = new Weapon('Orc Battle Axe', 'An Orc battle axe, perfect for cleaving enemies!', 1250, 8);
let curvedDagger = new Weapon("Curved Dagger", "A prime assasination tool used for disembowling enemies.", 1000, 6, 5);
let shortBow = new Weapon("Assasin's Bow", "A sleeker, quicker bow than the usual long bow.", 1000, 5);

//enemy weapons =>
var claws = new Weapon ('Claws', 'Sharp nails that cause a lot of pain.', 0, 3, 3);
var sharpClaws = new Weapon('Sharp Claws', 'Sharp claws capabale of piercing flesh like knife through butter.', 0, 4, 3);
var claws3 = new Weapon("Perilous CLaws", "Claws that are so strong they can destroy rocks with ease.", 0, 6, 5);
let unarmed = new Weapon('Unarmed', 'Just the fists they was born with.', 0, 2, 4);
let fangs = new Weapon('Fangs', 'Sharp fangs that inflict a lot of pain', 0, 3, 6);
let spiritClaws = new Weapon("Spirit Claws", "Ethereal Claws that assault your soul.", 0, 1, 20);
let banditSword = new Weapon("Bandit King's Sword", "A legendary sword said to have chopped off the heads of hundreds of unlucky villagers!", 0, 1, 20);
let knife = new Weapon("Knife", "A basic knife often used in kitchens.", 35, 3, 3);
let dualDaggers = new Weapon("Dual Daggers", "Two daggers often used by assasins.", 300, 5, 5);
let trident = new Weapon("Trident", "A trident created from the deep sea.", 1000, 7, 7);
let elvenSword = new Weapon("Elven Sword", "A sword crafted by the finest Elven Blacksmiths", 2000, 8, 8);
let elfBow = new Weapon("Elven Bow", "A bow of the finest quality.", 4000, 8, 6)


// Armor //
var clothArmor = new Armor("Cloth Armor", "Old reinforced robes that give little protection.", 20, 2)
var leatherArmor = new Armor("Leather Armor", "Some worn leather armor that has seen better days.", 35, 3);
var mailArmor = new Armor("Mail Armor", "Tattered mail armor that has been used by many soldiers before you", 45, 4);



// CITY ARMOR //
let darkRobes = new Armor("Dark Robes", "Robes imbued with dark energy.", 500, 5);
let elfArmor = new Armor("Makeshift Elven Armor", "Armor put together from different scavenged parts of elven armor.", 750, 6);
let elfArmor2 = new Armor("Elven Armor", "Armor made by the finest Elven smiths for the knights of their society.", 1250, 8);
let elfArmor3 = new Armor("Prestiged Elven Armor", "Armor reserved for only those in the highest place of Elven society", 2000, 10)
let dwarf = new Armor("Legendary Dwarven Armor", "The strongest armor in the world that protects against almosta anything.", 2000, 7);
let dragon = new Armor("Dragonscale Armor", "Armor that is one of a kind taht is virtually impossible to hit.", 4000, 8);

// Enemy Armor
var rawFur = new Armor("Torn Fur", "Fur that is very spotty, barely protecting the creature.", 0, 3)
var fur = new Armor("Rough Fur", "Fur that has some density to it, offering some protection.", 0, 5);
var fur2 = new Armor("Reinforced Furs", "This fur is a lot denser than normal fur, offering mild protection", 0, 7);
var goblinScraps = new Armor("Goblin Rags", "Although these are rags by normal standards, they still offer decent protection.", 0, 8);
var leather = new Armor("Old Leather Armor", "Battle worn leather armor.", 0, 9);
let skin = new Armor("Tough Skin", "Toughened skin capable of withstanding many weapons", 0, 9)
let bones = new Armor("Necrotic Bones", "Bones toughened by Necrotic energies.", 0, 10);
let spirit = new Armor("Spirit Form", 'This creature is a spirit and incredibly hard to hit!', 0, 16)
let water1 = new Armor("Aquatic Skin", "Skin that is capable of withstanding the wwater for long periods of time", 0, 6);
let water2 = new Armor("Aquatic Skin", "Skin toughened from the dephs of the ocean.", 0, 13)
let banditArmor = new Armor("Bandit King's Armor", "Armor that signifies them as the King of the Bandits!", 0, 14)
let orcArmor = new Armor("Orc Mail", "Orc created by the finest Orc blacksmiths!", 0, 15);
let treeBark = new Armor("Tree Bark", "Wood reinforced by the power of fairies", 0, 8);

// Consumables

var health1 = new HealingItem("Minor Health Potion", "A health potion made by a beginner alchemist.", 100, 20, 2);
var health2 = new HealingItem("Health Potion", "An average health potion.", 250, 45, 0);
var health3 = new HealingItem("Major Health Potion", "An incredibly potent health potion!", 500, 100, 0);

var mana1 = new ManaItem("Minor Mana Potion", "A mana potion made by a beginner alchemist.", 100, 20, 2);
var mana2 = new ManaItem("Mana Potion", "An average Mana potion.", 250, 45, 0);
var mana3 = new ManaItem("Major Mana Potion", "An incredibly potent Mana potion!", 500, 100, 0);

// MISC
let rests = new Item("Camping Supplies", "Supplies for camping out", 100, 1);

