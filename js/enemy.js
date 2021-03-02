// ENEMY FUNCTIONS AND VARIABLES
class Enemy {
  constructor(name, description, hp, equipped, armor, xp, attacks){
    this.name = name;
     this.description = description;
     this.maxHp = hp;
     this.hp = hp;
     this.equipped = equipped;
     this.armor = armor;
     this.ac = this.armor.ac + 2;
     this.xp = xp;
     this.attacks = attacks;
  }

  setHealth(){
    this.hp = this.maxHp;
  }

  isAlive(){
    if (this.hp > 0) {
      return true;
    } else {
      return false;
    }
  }
}

class SpellCaster extends Enemy {
  constructor(name, description, hp, equipped, armor, xp, attack, mp){
    super(name, description, hp, equipped, armor, xp, attack);
    this.mp = mp;
    this.maxMp = mp;
  }

}

class Attack{
  constructor(action, qDice, die){
    this.action = action;
    this.qDice = qDice;
    this.die = die;
  }
  // Function to figure out damage for attacks
  dmg(){
    let total = 0;
    for (let i = 0; i <this.qDice; i++){
      total = total + diceRoll(this.die);
    }
    return total;
  }
}


// Attacks
// blunt weapons
var smash = new Attack('smashes', 4, 4);
// SHarp Weapon Attacks
var slash = new Attack("slashes", 4, 4);
var stab = new Attack("stabs", 5,5);
var cut = new Attack("cuts", 3, 4);
// long ranged Attacks
var legShot = new Attack("shoots low at", 4, 4);
var chestShot = new Attack("aiming for your chest, shoots at", 6, 6);
var headShot = new Attack("aiming for your head, shoots at", 7, 7);
// ANimal Attacks
var scratch = new Attack("scratches", 3, 4);
var bite = new Attack("bites", 4, 5);
var pounce = new Attack("pounces", 4, 4);
var tear = new Attack("tears into", 6, 6);
// Human Attacks
var punch = new Attack("punches", 3, 3);
var kick = new Attack("kicks", 3, 3);
var bite = new Attack("bites", 2, 3);
var slap = new Attack("slaps", 2, 2);
var tackle = new Attack("tackles", 4, 3);
var bodyslam = new Attack("bodyslams", 5, 5);
var throwSlam = new Attack("throws", 6, 3);
// Sea Serpent Attacks
var screech = new Attack("screeches, hurting", 6, 5);
var howl = new Attack("howls, deafening", 4,4);
// Fairy Attacks
var naturesVengence = new Attack("uses the spirit of nature to attack", 3, 4);
var spiritOrbs = new Attack("shoots spirit orbs at", 5, 3);

// -- Enemies -- //
// Wild Animals
var mutt = new Enemy("Raggedy Mutt", "A beaten dog trying to survive.", 15, claws, rawFur, 5, [scratch, "weapon"]);
var dog = new Enemy('Dog', "A crazy dog out for blood!", 25, claws, fur, 15, [scratch]);
var wolf = new Enemy('Wolf', "A ravenous wolf ready for some meat!", 35, claws, fur, 25, [scratch, bite, "weapon"]);
var hound = new Enemy("Hound", "A clear leader of the wild dogs that live nearby...", 45, sharpClaws, fur, 35, [scratch, bite, pounce, "weapon"]);
var wolfLeader = new Enemy("Wolfpack Leader", "The strongest wolf in the area. They lead by force.", 65, sharpClaws, fur2, 40, [scratch, bite, pounce, tear, "weapon"]);
var direWolf = new Enemy("Dire Wolf", "A legendary type of wolf that is said to be as big as full grown man and as strong as an ox!", 90, claws3, fur2, 60, [scratch, bite, pounce, tear, "weapon"]);

// Humans
// Tier 1
var child = new Enemy("Young Thief", "A tiny pick pocket who can't be more than a teenager.", 15, unarmed, clothArmor, 5, [punch, kick, slap, bite, "weapon"] );
var pettyThief = new Enemy("Petty Thief", "A first time pick pocket...", 25, unarmed, clothArmor, 10, [punch, kick, slap, bite, "weapon"] );
var thief = new Enemy("Thief", "A thief who is not very good at being stealthy...", 35, knife, clothArmor, 15, [punch, kick, slap, bite, "weapon", "weapon"] );
var robber = new Enemy("Robber", "Your everyday robber come to steal as much as he can from you.", 40, knife, clothArmor, 20, [punch, kick, slap, bite, "weapon", "weapon"] );
var thug = new Enemy("Thug", "A neighborhood thug looking to bully you into giving him some coin.", 40, club, clothArmor, 20, [punch, kick, slap, bite, "weapon", "weapon"] );
// Tier 2
var highwayman = new Enemy("Highwayman", "If you are looking to pass the bridge, he requires your coin!", 60, sword, leatherArmor, 35, [punch, kick, slash, stab, cut, "weapon", "weapon"] );
var bandit = new Enemy("Bandit", "A person well versed in crime and sin.", 65, sword, leatherArmor, 35, [punch, kick, slash, stab, cut, "weapon", "weapon"] );
var banditScout = new Enemy("Bandit Scout", "A bandit scout spying for their next victim.", 45, knife, leatherArmor, 25, [punch, kick, slash, stab, cut, "weapon", "weapon"] );
var banditArcher = new Enemy("Bandit Archer", "A bandit specialized in long ranged combat.", 60, bow, leatherArmor, 45, [punch, kick, legShot, chestShot, headShot, "weapon", "weapon"] );
var banditBrute = new Enemy("Bandit Brute", "A large bandit with incredible strength and toughness.", 100, club, 45, [punch, kick, slap, tackle, bodyslam, throwSlam, smash, "weapon"]);
var outlaw = new Enemy("Outlaw", "A famous outlaw whose been on the run for years", 80, dualDaggers, leatherArmor, 50, [punch, kick, slash, stab, cut, tackle, bodyslam, "weapon"]);

// Elves
var elf = new Enemy("Elf Villager", "The oldest and most wise race in the land. He does not look very happy to see you...", 90, knife, clothArmor, 40, [punch, kick, slash, bodyslam, throwSlam, "wepaon", "weapon"]);
var elfWarrior = new Enemy("Elf Warrior", "An Elven Warrior dressed for battle.", 120, sword, leatherArmor, 65, [slash, cut, stab, bodyslam, throwSlam, "weapon"]);
var elfKnight = new Enemy("Elf Knight", "An Elven Knight is one of the most respected and honored warriors in an Elven society.", 150, sword, elfArmor2, 100, [slash, cut, stab, "weapon"]);
var elfLord = new Enemy("Elven Lord", "A leader of the Elven Knights.", 200, elvenSword, elfArmor3, 200, [slash, cut, stab, "weapon", "weapon", "weapon"]);
var elfHunter = new Enemy("Elf Hunter", "An elegant hunter of the Elves.", 90, bow, leatherArmor, 50, [headShot, legShot, chestShot, punch, bodyslam, "weapon"]);
var elfArcher = new Enemy("Elf Archer", "One of the finest archers in all of the land", 120, elfBow, elfArmor2, 80, ["weapon", "wepaon", legShot, chestShot, headShot]);

// Fairies
var fairy = new Enemy("Fairy", "A fairy whose angry at your intrusion of her peace.", 30, unarmed, spirit, 40, [naturesVengence, spiritOrbs]);
var ent = new Enemy("Ent", "A tree animated by the spirits of fairies to get rid of intruders.", 100, unarmed, treeBark, 60, [punch, kick, bodyslam, throwSlam, scratch, spiritOrbs]);
// Orcs
var orc = new Enemy("Orc", "A large, greenish brown beast whose both intelligent and incredibly strong.", 120, unarmed, mailArmor, 80, [punch, kick, bodyslam, throwSlam, bite]);
var orcWarrior = new Enemy("Orc Warrior", "The legendary and horrifying warriors of the Orcish Strongholds stop at nothing until they are either dead or victorious.", 140, club, mailArmor, 90, [punch, kick, smash, bodyslam, throwSlam]);

// Goblins
var goblin = new Enemy("Goblin", "A small, hideous creature set on taking the flesh off your bones.", 35, knife, clothArmor, 20, [punch, kick, slap, bite, slash, cut, "weapon", "weapon", "weapon"]);
var goblinWarrior = new Enemy("Goblin Warrior", "One of the stronger goblins who is equipped to fight.", 45, sword, leatherArmor, 35, [punch, kick, slap, bite, slash, cut, stab, "weapon", "weapon"]);
var goblinScout = new Enemy("Goblin Scout", "One of the smaller goblins who simply scouts out nearby victims.", 20, unarmed, clothArmor, 15, [punch, kick, bite, slap, "weapon"]);
var rat = new Enemy("Big Rat", "A very large rat who seemingly follows the orders of the Goblins.", 40, claws, fur, 20, [scratch, bite, pounce, tear, "weapon"]);
var direRat = new Enemy("Dire Rat", "A rat that is sometimes used as a deadly mount by the Goblins. It is terrifyingly large and strong.", 80, sharpClaws, fur2, 40, [scratch, bite, pounce, tear, "weapon"]);
// Undead
var zombie = new Enemy("Zombie", "An undead corpse rotting away that only desires your warm flesh.", 35, sharpClaws, leatherArmor, 30, [scratch, bite, slap, tear, "weapon", "weapon", "weapon"]);
var ghost = new Enemy("Ghost", "A spirit intent on causing you harm.", 40, spiritClaws, spirit, 50, [scratch, "weapon", "weapon"]);
var skeleton = new Enemy("A skeleton who has risen to fight the living.", 60, sword, bones, 50, [stab, slash, cut, "weapon", "weapon"]);
// Naga
var murloc = new Enemy("Murloc", "A small, fishlike creature who speaks in strange gurgles.", 30, claws, water1, 20, [scratch, bite, slap, tackle, pounce, "weapon"]);
var murlocWarrior = new Enemy("Murloc Warrior", "A murloc clearly suited for fighting.", 45, sword, water1, 35, [scratch, bite, tackle, slash, cut, "weapon"]);
var murlocWitch = new SpellCaster("Murloc Witch", "A murloc who seems to have wisdom behind their fish eyes.", 60, sword, water1, 50, [scratch, bite, slash, cut, waterWhip, waterSpikes, "weapon"], 50);
var naga = new Enemy("Naga Servant", "A long serpent like creature who serves others like them.", 75, sharpClaws, water1, 60, [scratch, bite, pounce, tear, bodyslam, tackle, "weapon"]);
var nagaWarrior = new Enemy("Naga Warrior","A honored warrior of the Naga. They are not to be trifled with.", 100, sword, water2, 75, [slash, cut, stab, scratch, bite, "weapon"]);
var nagaHunter = new Enemy("Naga Hunter", "An esteemed hunter of the Naga. They are extremely skilled with a bow.", 100, bow, water2, 75, [headShot, legShot, chestShot, "weapon"]);
var mermaid = new SpellCaster("Mermaid", "A beautiful half human half sea serpent creature.", 100, unarmed, water2, 75, [scratch, screech, howl, waterWhip, waterSpikes, "weapon"], 200)
var merman = new Enemy("Merman", "A beautiful half human half sea serpent creature who has incredible strength.", 140, trident, water2, 100, [stab, slash, cut, scratch, bodyslam, tackle, "weapon"]);




