// ENEMY FUNCTIONS AND VARIABLES
// Class for Enemy Attacks //
class Attack{
  constructor(name, qDice, die){
    this.name = name;
    this.qDice = qDice;
    this.die = die;
  }
  // Function to figure out damage for attacks
  dmg(){
    let total = 0;
    for (i = 0; i <this.qDice; i++){
      total = total + diceRoll(this.die);
    }
    return total;
  }
}

// Atack objects
let weapon = new Attack('attacks with', 0, 0); // default attack
// Beasts
let scratch = new Attack('scratches', 2, 7);
let bite = new Attack('bites', 6, 3);
// Sharp Weapons
let slash = new Attack('slashes', 5, 4);
let stab = new Attack('stabs', 1, 20);
// Blunt weapons
let bash = new Attack('bashes', 4, 4 );
// Long Range
let focused = new Attack('takes a focused shot', 3, 10)
// unarmed
let punch = new Attack('punches', 2, 4);
let kick = new Attack('kicks', 3, 3);
let choke = new Attack('chokes', 4, 6);


// BOSS ATTACKS //
// LICH //
let lichHowl = new Attack('howls with its Lich powers at', 6, 6);
let lichClaws = new Attack('uses necrotic energy to slash', 3, 20);
// Warchief //
let orcSlash = new Attack(', with blessing of his ancestors, slashes', 8, 6);
let orcYell = new Attack(', with the power of his ancestors, screams at', 10, 6);
// BANDIT KING //
let sneakySlash = new Attack('uses misdirection to doublke slash', 10, 6);
let backstab = new Attack('kicks you around and backstabs', 7, 20);
// Enemy Variables
function Enemy (name, description, maxHp, hp, maxMp, mp, equipped, armor, ac, xp, attacks){
     this.name = name;
     this.description = description;
     this.maxHp = maxHp;
     this.hp = hp;
     this.maxMp = maxMp;
     this.mp = mp;
     this.equipped = equipped;
     this.armor = armor;
     this.ac = this.armor.ac;
     this.xp = xp;
     this.attacks = attacks;
   }


// Default Enemy
let enemy = new Enemy('Rabid Dog', 'A crazed dog on the loose!', 15, 15, 0, 0, claws, fur, fur.ac, 10, [weapon]);

// Function to find a new enemy when battle starts
// Bases it off of location
function newEnemy() {
  let x = findLocName();

  console.log(findLocName());
  if (x === 'Road'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Scary Wolf', 'This wolf is out for blood!', 20, 20, 0, 0, claws, fur, fur.ac, 15, [scratch, bite]);
          break;
        case 1:
          enemy = new Enemy('Big Bad Wolf', 'This is one of the stronger wolves in the area!',40, 40, 0, 0, claws, fur2, fur2.ac, 25, [scratch, bite, weapon]);
          break;
        case 2:
          enemy = new Enemy('Goblin', 'A goblin slave whose strength is meager, but do not underestimate him!', 30, 30, 0, 0, dagger, goblinScraps, goblinScraps.ac, 20, [weapon, slash]);
          break;
        case 3:
          enemy = new Enemy('Orc', 'Just a regular orc peon of the lowest standing.', 50, 50, 0, 0, axe, leather, leather.ac, 40, [weapon, slash]);
          break;
        case 4:
          enemy = new Enemy('Rabid Dog', 'A crazed dog on the loose!', 15, 15, 0, 0, claws, fur, fur.ac, 10, [scratch, bite]);
          break;
      } 
  } else if (x === 'Abandoned Ruins'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Thug', 'A thug out for your wallet!', 40, 40, 0, 0, sword, clothArmor, clothArmor.ac, 30, [weapon, slash]);
          break;
        case 1:
          enemy = new Enemy('Thief', 'A petty thief',35, 35, 0, 0, dagger, clothArmor, clothArmor.ac, 25, [weapon, stab]);
          break;
        case 2:
          enemy = new Enemy('Amateur Assasin', 'An amateur assasin whose not very good at what he does...', 45, 45, 0, 0, sword, leatherArmor, leatherArmor.ac, 35, [weapon, slash, stab]);
          break;
        case 3:
          enemy = new Enemy('Brute', 'A big oaf looking to beat anyone nearby!', 50, 50, 0, 0, club, mailArmor, mailArmor.ac, 55, [weapon, bash]);
          break;
        case 4:
          enemy = new Enemy('Shady Dealer', "Something isn't quite right about him...", 20, 20, 0, 0, unarmed, clothArmor, clothArmor.ac, 20, [weapon]);
      }
  } else if (x === 'Cave'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Large Spider', 'A terrifying spider the size of a cat!', 35, 35, 0, 0, claws, skin, skin.ac, 25, [weapon, bite, scratch]);
          break;
        case 1:
          enemy = new Enemy('Elder Spider', 'This is one of the stronger wolves in the area!',40, 40, 0, 0, fangs, skin, skin.ac, 25, [weapon, bite, scratch]);
          break;
        case 2:
          enemy = new Enemy('Goblin Scout', 'A goblin scout keeping his territory safe.', 40, 40, 0, 0, sword, leather, leather.ac, 35, [weapon, slash]);
          break;
        case 3:
          enemy = new Enemy('Goblin Guard', 'One of the larger goblins keeping watch.', 55, 55, 0, 0, axe, leather, leather.ac, 40, [weapon, slash]);
          break;
        case 4:
          enemy = new Enemy('Vicious Bat', 'A crazed bat attacking anything that comes close to it!', 15, 15, 0, 0, claws, fur, fur.ac, 10, [weapon, bite]);
      }   
  } else if (x === 'Forest'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Large Bear', 'This bear is just protecting the forest from intruders!', 60, 60, 0, 0, claws, fur, fur.ac, 35, [weapon, bite, scratch]);
          break;
        case 1:
          enemy = new Enemy('Big Bad Wolf', 'This is one of the stronger wolves in the area!',40, 40, 0, 0, claws, fur2, fur2.ac, 25, [weapon, scratch]);
          break;
        case 2:
          enemy = new Enemy('Enraged Fairy', 'A forest fairy that has gone mad!', 30, 30, 150, 150, unarmed, clothArmor, clothArmor.ac, 20, [weapon, fairyDust, fairyHands]);
          break;
        case 3:
          enemy = new Enemy('Elf Peasant', 'An elf peasant who seems to have gotten lost.', 80, 80, 0, 0, bow, mailArmor, mailArmor.ac, 75, [weapon, focused]);
          break;
        case 4:
          enemy = new Enemy('Tiger', 'A large predator of the forest!', 35, 35, 0, 0, fangs, fur2, fur2.ac, 30, [weapon, scratch, bite]);
      }
  } else if (x === 'Compromised Road'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Thug', 'A thug out for your wallet!', 40, 40, 0, 0, sword, clothArmor, clothArmor.ac, 30, [weapon, slash]);
          break;
        case 1:
          enemy = new Enemy('Thief', 'A petty thief',35, 35, 0, 0, dagger, clothArmor, clothArmor.ac, 25, [weapon, stab]);
          break;
        case 2:
          enemy = new Enemy('Amateur Assasin', 'An amateur assasin whose not very good at what he does...', 45, 45, 0, 0, sword, leatherArmor, leatherArmor.ac, 35, [weapon, slash, stab]);
          break;
        case 3:
          enemy = new Enemy('Highwayman', 'A thug looking for his pay!', 60, 60, 0, 0, sword, mailArmor, mailArmor.ac, 45, [weapon, slash, stab]);
          break;
        case 4:
          enemy = new Enemy('Shady Dealer', "Something isn't quite right about him...", 20, 20, 0, 0, unarmed, clothArmor, clothArmor.ac, 20, [weapon, punch, kick, choke]);
      }
  } else if (x === 'Bridge'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Thug', 'A thug out for your wallet!', 40, 40, 0, 0, sword, clothArmor, clothArmor.ac, 30, [weapon, slash]);
          break;
        case 1:
          enemy = new Enemy('Thief', 'A petty thief',35, 35, 0, 0, dagger, clothArmor, clothArmor.ac, 25, [weapon, stab]);
          break;
        case 2:
          enemy = new Enemy('Amateur Assasin', 'An amateur assasin whose not very good at what he does...', 45, 45, 0, 0, sword, leatherArmor, leatherArmor.ac, 35, [weapon, slash, stab]);
          break;
        case 3:
          enemy = new Enemy('Highwayman', 'A thug looking for his pay!', 60, 60, 0, 0, sword, mailArmor, mailArmor.ac, 45, [weapon, slash, stab]);
          break;
        case 4:
          enemy = new Enemy('Bandit', "A bandit out for your purse!", 45, 45, 0, 0, sword, leatherArmor, leatherArmor.ac, 35, [weapon, slash]);
      }
  } else if (x === 'Dark Graveyard'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Skeleton', 'A skeleton raised as the living dead!', 35, 35, 0, 0, unarmed, bones, bones.ac, 25, [weapon, punch, kick, choke]);
          break;
        case 1:
          enemy = new Enemy('Zombie', 'A rotting zombie risen as the dead!', 85, 85, 0, 0, claws, bones, bones.ac, 40, [weapon, slash, punch, kick, choke]);
          break;
        case 2:
          enemy = new Enemy('Ghost', 'A spirit who has been risen to fight you!', 20, 20, 300, 300, spiritClaws, spirit, spirit.ac, 40, [weapon, necroShot, chill]);
          break;
        case 3:
          enemy = new Enemy('Skeleton Archer', 'A skeleton archer!', 45, 45, 0, 0, bow, bones, bones.ac, 55, [weapon, focused]);
          break;
        case 4:
          enemy = new Enemy('Zombie General', "The leader of the zombies!", 125, 125, 0, 0, claws, leatherArmor, leatherArmor.ac, 70, [weapon, slash, punch, kick]);
      }
  } else if (x === 'Necrotic Tomb'){
    let b = Math.floor(Math.random() * (3 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Necromancer', 'A wicked wizard adept in the abilities of necromancy.', 65, 65, 500, 500, darkStaff, darkRobes, (darkRobes.ac + 8), 70, [weapon, necroticShot, chill, boneShard, darkEmbrace]);
          break;
        case 1:
          enemy = new Enemy('Lich', 'An incredibly powerful being who has lived for hundred of years as an Undead Lord', 400, 400, 1000, 1000, darkStaff, bones, (bones.ac + 5), 300, [weapon, necroticShot, chill, boneShard, darkEmbrace, soulDrain, lichClaws, lichHowl]);
          break;
        case 2:
          enemy = new Enemy('Spirit of Misery', 'A spirit who embodies the essence of misery.', 60, 60, 600, 600, spiritClaws, spirit, spirit.ac, 90, [weapon, necroShot, chill]);
          break;
        case 3:
          enemy = new Enemy('Abomination', 'A hideous creature stitched together from various corpses', 200, 200, 0, 0, axe, bones, bones.ac, 70, [weapon, slash]);
          break;
      }
  } else if (x === 'River'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Fishman', 'A small aquatic creature who gargles at you', 35, 35, 0, 0, claws, water, water.ac, 35, [weapon, bite, scratch]);
          break;
        case 1:
          enemy = new Enemy('Fishman Serpent', 'An aquatic snake the size of a small human',45, 45, 0, 0, fangs, water, water.ac, 40, [weapon, scratch, bite]);
          break;
        case 2:
          enemy = new Enemy('Shady Fisherman', 'A fisherman down on his luck looking for some coin...', 30, 30, 0, 0, unarmed, clothArmor, (clothArmor.ac + 8), 20, [weapon, punch, kick, choke]);
          break;
        case 3:
          enemy = new Enemy('Wandering Bandit', 'A bandit wandering around, looking for his next prize.', 40, 40, 0, 0, dagger, leather, leather.ac, 35, [weapon, stab, slash]);
          break;
        case 4:
          enemy = new Enemy('Naga', 'An aquatic creature the size of a large human!', 60, 60, 0, 0, claws, water, water.ac, 30, [weapon, scratch, bite, choke]);
      }
  } else if (x === 'Desolate Plain'){
    let b = Math.floor(Math.random() * (2 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Angry Gazelle', 'This large gazelle thought you were too close to her children!', 15, 15, 0, 0, claws, fur, fur.ac, 15, [weapon, bite, scratch]);
          break;
        case 1:
          enemy = new Enemy('Lioness', 'A lion patrolling the areas for food...',40, 40, 0, 0, fangs, fur2, fur2.ac, 25, [weapon, scratch, bite]);
          break;
      }
  } else if (x === 'Elf Village'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Elf Soldier', 'An Elven soldier guarding his village!', 150, 150, 0, 0, sword, elvenArmor, elvenArmor.ac, 80, [weapon, slash, stab]);
          break;
        case 1:
          enemy = new Enemy('Elf Druid', 'One of the legendary Elven Druids!',200, 200, 700, 700, unarmed, elvenArmor, elvenArmor.ac, 100, [weapon, punch, choke, fairyDust, fairyHands, natureStrangle]);
          break;
        case 2:
          enemy = new Enemy('Enraged Fairy', 'A forest fairy that has gone mad!', 30, 30, 150, 150, unarmed, clothArmor, clothArmor.ac, 20, [weapon, fairyDust, fairyHands]);
          break;
        case 3:
          enemy = new Enemy('Elf Peasant', 'An elf peasant who seems to have gotten lost.', 80, 80, 0, 0, bow, mailArmor, mailArmor.ac, 75, [weapon, focused]);
          break;
        case 4:
          enemy = new Enemy('Mighty Bear', 'A legendary bear for its huge size and vitality', 300, 300, 0, 0, fangs, fur2, fur2.ac, 30, [weapon, scratch, bite]);
      }
  } else if (x === 'Elf City'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Elf Guard', 'An Elven soldier guarding his city!', 200, 200, 0, 0, bow, elvenArmor, elvenArmor.ac, 90, [weapon, focused, punch, choke]);
          break;
        case 1:
          enemy = new Enemy('Elf Druid Master', 'One of the strongest Elven Druids',300, 300, 1000, 1000, bow, elvenArmor, elvenArmor.ac, 130, [weapon, focused, fairyDust, fairyHands, natureStrangle]);
          break;
        case 2:
          enemy = new Enemy('Fairy Spirit', 'A spirit of a a strong fairy.', 65, 65, 600, 600, spiritClaws, spirit, spirit.ac, 20, [weapon, fairyDust, fairyHands]);
          break;
        case 3:
          enemy = new Enemy('Elf Peasant', 'An elf peasant who labors in the city', 80, 80, 0, 0, bow, mailArmor, (mailArmor.ac + 10), 75, [weapon, focused, choke, punch]);
          break;
        case 4:
          enemy = new Enemy("Kael'thus", 'The leader of the Elven Nation. He is increidbly powerful.', 500, 500, 1500, 1500, bow, elvenArmor, (elvenArmor.ac + 3), 500, [weapon, fairyDust, faiyHands, chill, natureStrangle, focused]);
      }
  } else if (x === 'Fairy Gathering'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Enraged Fairy', 'A forest fairy that has gone mad!', 30, 30, 150, 150, unarmed, clothArmor, clothArmor.ac, 20, [weapon, fairyDust, fairyHands]);
          break;
        case 1:
          enemy = new Enemy('Elf Druid', 'A druid observing the fairy spirits!',200, 200, 700, 700, unarmed, elvenArmor, elvenArmor.ac, 100, [weapon, punch, choke, fairyDust, fairyHands, natureStrangle]);
          break;
        case 2:
          enemy = new Enemy('Fairy Spirit', 'A spirit of a a strong fairy.', 65, 65, 600, 600, spiritClaws, spirit, spirit.ac, 20, [weapon, fairyDust, fairyHands]);
          break;
        case 3:
          enemy = new Enemy('Elf Peasant', 'An elf peasant who stumbled upon these fairies', 80, 80, 0, 0, bow, mailArmor, (mailArmor.ac + 10), 75, [weapon, focused, choke, punch]);
          break;
        case 4:
          enemy = new Enemy("Maer", 'The strongest Fairy in existence. She leads with her increidble strength', 300, 300, 1300, 1300, spiritClaws, spirit, spirit.ac, 350, [weapon, faiyHands, chill, natureStrangle]);
      }
  } else if (x === 'City of Wall'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Thug', 'A thug out for your wallet!', 40, 40, 0, 0, sword, clothArmor, clothArmor.ac, 30, [weapon, slash]);
          break;
        case 1:
          enemy = new Enemy('Thief', 'A petty thief',35, 35, 0, 0, dagger, clothArmor, clothArmor.ac, 25, [weapon, stab]);
          break;
        case 2:
          enemy = new Enemy('Amateur Assasin', 'An amateur assasin whose not very good at what he does...', 45, 45, 0, 0, sword, leatherArmor, leatherArmor.ac, 35, [weapon, slash, stab]);
          break;
        case 3:
          enemy = new Enemy('Highwayman', 'A thug looking for his pay!', 60, 60, 0, 0, sword, mailArmor, mailArmor.ac, 45, [weapon, slash, stab]);
          break;
        case 4:
          enemy = new Enemy('Shady Dealer', "Something isn't quite right about him...", 20, 20, 0, 0, unarmed, clothArmor, clothArmor.ac, 20, [weapon, punch, kick, choke]);
      }
  } else if (x === 'Bandit Hideout'){
    let b = Math.floor(Math.random() * (2 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Bandit', 'A look out bandit!', 40, 40, 0, 0, sword, clothArmor, (clothArmor.ac + 8), 30, [weapon, slash, punch, kick, choke]);
          break;
        case 1:
          enemy = new Enemy('Bandit Brute', 'A bandit brute, ready to smash some skulls!',60, 60, 0, 0, club, leather, leather.ac, 45, [weapon, bash, punch, kick, choke]);
          break;
      }
  } else if (x === 'Bandit Fortress'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Bandit', 'A bandit ready for his next stolen purse of gold!', 45, 45, 0, 0, sword, clothArmor, (clothArmor.ac + 8), 40, [weapon, slash, punch, kick, choke]);
          break;
        case 1:
          enemy = new Enemy('Thief', 'A petty thief',55, 55, 0, 0, dagger, leather, leather.ac, 45, [weapon, stab, slash, punch, kick]);
          break;
        case 2:
          enemy = new Enemy('Assasin', 'An assasin quietly waiting for his next job...', 85, 85, 0, 0, sword, leatherArmor, (leatherArmor.ac + 9), 55, [weapon, slash, stab, choke]);
          break;
        case 3:
          enemy = new Enemy('Bandit Brute', 'A bandit brute, ready to smash some skulls!',90, 90, 0, 0, club, leather, leather.ac, 65, [weapon, bash, punch, kick, choke]);
          break;
        case 4:
          enemy = new Enemy('Bandit King', "The king of the bandits!", 150, 150, 0, 0, banditSword, banditArmor, banditArmor.ac, 20, [weapon, slash, stab, sneakySlash, backstab]);
      }
  } else if (x === 'Orc Outpost'){
    let b = Math.floor(Math.random() * (2 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Orc Scout', 'An Orc Scout searching for threats!', 85, 85, 0, 0, sword, leather, (leather.ac + 2), 50, [weapon, slash, punch, kick, choke]);
          break;
        case 1:
          enemy = new Enemy('Orc Archer Scour', 'An Orc Scout searching for threats!',85, 85, 0, 0, bow, leather, leather.ac, 55, [weapon, focused]);
          break;
      }
  } else if (x === 'Orc Stronghold'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Orc Scout', 'An Orc Scout on standby.', 85, 85, 0, 0, axe, orcArmor, orcArmor.ac, 50, [weapon, slash, punch, kick, choke]);
          break;
        case 1:
          enemy = new Enemy('Orc Warrior', 'A strong Orc grunt.',130, 130, 0, 0, battkleAxe, orcArmor, orcArmor.ac, 65, [weapon, slash, punch, kick]);
          break;
        case 2:
          enemy = new Enemy('Ogre', 'A giant Orc whose only joy is crushing bones.', 150, 150, 0, 0, hammer, orcArmor, orcArmor.ac, 55, [weapon, punch, bash, choke]);
          break;
        case 3:
          enemy = new Enemy('Orc Shaman', 'One of the very few Orcs capable of using magic!',100, 100, 450, 450, club, leather, leather.ac, 75, [weapon, bash, punch, fireBall, iceShard]);
          break;
        case 4:
          enemy = new Enemy('Thrall', "The mighty Warchief of the Orcs!", 650, 650, 1000, 1000, battleAxe, orcArmor, orcArmor.ac, 600, [weapon, slash, stab, orcSlash, orcYell, iceShard, fireBall]);
      }
  } else if (x === 'Goblin Lair'){
    let b = Math.floor(Math.random() * (4 + 1));
      switch(b) {
        case 0:
          enemy = new Enemy('Goblin', 'A goblin slave whose strength is meager, but do not underestimate him!', 30, 30, 0, 0, dagger, goblinScraps, goblinScraps.ac, 20, [weapon, slash]);
          break;
        case 1:
          enemy = new Enemy('Goblin Scout', 'A goblin scout keeping his territory safe.', 40, 40, 0, 0, sword, leather, leather.ac, 35, [weapon, slash]);
          break;
        case 2:
          enemy = new Enemy('Goblin Guard', 'One of the larger goblins keeping watch.', 55, 55, 0, 0, axe, leather, leather.ac, 40, [weapon, slash]);
          break;
        case 3:
          enemy = new Enemy('Black Spider', 'A terrifying spider the size of a child!', 55, 55, 0, 0, fangs, skin, (skin.ac + 3), 35, [weapon, bite, scratch]);
          break;
        case 4:
          enemy = new Enemy('Goblin Warchief', "The leader of one of the Goblin tribes!", 100, 100, 0, 0, battleAxe, leather, leather.ac, 80, [weapon, slash, stab, choke]);
      }
  } 
} 
