// MAGIC FUNCTIONS //

class Spell {
  constructor(name, description, cost, qDice, die) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.qDice = qDice;
    this.die = die;
  }

  attack(){
    let i =0;
    let total = 0;
    for (i = 0; i <= (this.qDice - 1); i++){
      total = total + diceRoll(this.die);
    }
    return total;

  }

  getCost(){
    let mana = cost * 10
    return mana;
  }
}

class HealingSpell extends Spell {
  constructor(name, description, cost, qDice, die) {
    super(name, description, cost, qDice, die);
  }
}

// Player SPells
var fireBall = new Spell('Fireball', 'Hurls a fireball at the enemy!', 20, 4, 6);
var iceShard = new Spell('Ice Shard', 'Shoots Ice Shards at the enemy!', 35, 6, 6);
var healingHands = new HealingSpell('Healing Hands', 'Imbues wounds with a healing glow, allowing them to be regenerated', 40, 6, 4);
var deathlyTouch = new Spell('Deathly Touch', 'Touches the enemy with the power of death.', 50, 2, 20)
var regenerate = new HealingSpell("Regenerate", "Regenerates the caster's body, capable of growing limbs back.", 75, 4, 20);
var lightning = new Spell("Kirin", 'Calls down the might of the thunderclap', 85, 5, 20);
var hellFire = new Spell("Amaterasu", "Calls down black flames from the dephs of Hell to eternally burn the target", 120, 7, 20);
var arcaneMissiles = new Spell("Arcane Missiles", 'Shoots ten Arcane missiles at the enemy, causing massive damage!', 150, 10, 20);
var rebirth = new HealingSpell("Rebirth", "Calls down the power of the heaven to heal you.", 150, 10, 20);
var godsMight = new Spell("Judgement", "Summons the almighty judgement from the Gods above to discipline the enemy.", 300, 20, 20);
var damn = new Spell("Damnation", "Persuade the devil to damn the enemy's soul, causing them eternal pain!", 23, 20);

// List of spells in order of leveling up
var spellList = [fireBall, iceShard, healingHands, deathlyTouch, regenerate, lightning, hellFire, arcaneMissiles, rebirth, godsMight, damn];
//This shows what the palyer crrently has. 1 = has, 0 = not
var playerSpells = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Store Spells
var darkSpear = new Spell('Necrotic Spear', 'Gathering the spirits of the death, they form a spear capable of stripping a show', 350, 15, 20)

// Enemy Spells
let fairyDust = new Spell('Fairy Dust', 'Sprinkles deadly fairy dust on the enemy!', 15, 3, 6);
let fairyHands = new Spell("Fairy Claws", 'The fairy slashes with magical claws!', 25, 4, 5);
let necroShot = new Spell("Necrotic Shot", "Shoots necrotic energy at the enemy!", 20, 6, 6);
let chill = new Spell("Chill", "Chills the enemies soul", 30, 4, 6);
let boneShard = new Spell("Bone Shards", "Shoots shards of bones at the enemy!", 40, 2, 20);
let darkEmbrace = new Spell("Dark Embrace", "Uses dark energy to squeeze the enemy's heart.", 50, 5, 10);
let soulDrain = new Spell("Soul Drain", 'Drains the targets soul', 100, 3, 20);
let natureStrangle = new Spell("Root Strangle", 'Uses roots to strangle the enemy!', 60, 4, 10)