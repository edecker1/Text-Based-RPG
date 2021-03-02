// FUNCTIONS RELATING TO TRAVEL //

class Location {
  constructor(name, description, chance, color, enemys) {
    this.name = name;
    this.description = description;
    this.chance = chance;
    this.color = color;
    this.enemys = enemys
  }

  ambush(){
    let r = randomChance();
    let d = (me.dext * .5);
    console.log("Added " + d);
    r += d;
    console.log("Ambush chance is " + r + " versus location chance " + this.chance);
    if (r <= this.chance){
      alert("You have been ambushed!");
      Battle.newBattle();
      GameManager.battleTime = true;
      console.log('BATTLE TIME')
    } else {
      console.log("Avoided Ambush")
    }
  }

  pickEnemy(){
    let random = Math.floor(Math.random() * this.enemys.length);
    let attacker = this.enemys[random];
    return attacker;
  }

}


function findLocName() {
  return map[me.x][me.y].name;
}

function findLocDesc() {
  return map[me.x][me.y].description;
}

function findLoc(){
  let name = map[me.x][me.y].name;
  console.log("Name is " + name);
  let x = 0;
  for (const loc in allLocs){
    x += 1;
    console.log(x + ". Current loc name is: " + loc.name);
    if (loc.name === name){
      console.log("Matching name is " + loc.name);
      return loc;
    }
  }
}


// All locations
// Nature
var road = new Location('Road', "A worn road that's been well traveled.", 20, 'Azure', [dog, mutt, wolf, robber, pettyThief, child, thief, thug, outlaw, bandit]);
var road1 = new Location('Compromised Road', "A worn road that's been compromised by bandits", 65, 'Azure', [mutt, bandit, banditArcher, highwayman, banditBrute, banditScout, outlaw, pettyThief, thief, thug, robber]) 
var plain = new Location("Desolate Plain", 'An open plain that does not have much life...', 20, 'DarkKhaki', [dog, wolf, hound, mutt, wolfLeader]);
var river = new Location("River", 'A shallow river full of interesting finds...', 40, 'CornflowerBlue', [murloc, murlocWarrior, murlocWitch, naga, nagaWarrior, nagaHunter, mermaid, merman, mutt, wolf, dog]);
// Town Locations
var town = new Location('Village', "A small village that has some small shops available.", 0, 'GhostWhite', [dog]);
var city = new Location('City of Wall', 'A small human city with giant walls', 35, 'GhostWhite', [dog]);
// ELves
var elfVillage = new Location("Elf Village", 'A village of elves. They do not seem very friendly...', 80, 'Olive', [elf, elfWarrior, elfHunter, fairy, ent, direWolf, wolf]);
var elfCity = new Location("Elf City", 'A city of elves. You should not have come here...', 100, 'DarkOliveGreen', [fairy, ent, elf, elfArcher, elfHunter, elfKnight, elfLord, direWolf]);
// Fairies
var forest = new Location('Forest', "A winding forest full of dangers and goods...", 45, 'DarkGreen', [wolf, mutt, dog, hound, ent, elf, fairy, fairy, direWolf, wolf]);
var fairyGathering = new Location("Fairy Gathering", 'A meeting place for fairies. They do not take kindly to strangers...', 65, 'SpringGreen', [fairy, ent, direWolf]);
// Goblins
var cave = new Location('Cave', "A dark cave that is home to many monsters.", 70, 0, 'Ivory', [rat, goblin, goblinScout]);
var goblinLair = new Location("Goblin Lair", 'A lair crawling with goblins!', 90, 'Silver', [rat, direRat, goblin, goblinWarrior, goblinScout]);
// Undead
var grave = new Location('Dark Graveyard', 'A dark place littered with graves and bones...', 70, 'DarkViolet', [zombie]);
var tomb = new Location("Necrotic Tomb", 'A tomb that exudes terrible necrotic energies...', 95, 'RebeccaPurple', [skeleton, ghost, zombie])
// Bandits
var ruins = new Location('Abandoned Ruins', "Dark, shattered remnants of past settlements...", 85, [outlaw, bandit, banditBrute, banditScout, banditArcher]);
var bandits = new Location("Bandit Hideout", 'Territory claimed by bandits and thieves', 70, 'OrangeRed', [outlaw, bandit, banditBrute, banditScout, banditArcher]);
var banditKing = new Location("Bandit Fortress", "A infamous fortress housing the one known as the 'Bandit King'...", 100, 'Red', [outlaw, bandit, banditBrute, banditScout, banditArcher])
var bridge = new Location("Bridge", 'A bridge that appears to be compromised...', 95, 'Bisque', [mutt, bandit, banditArcher, highwayman, banditBrute, banditScout, outlaw, pettyThief, thief, thug, robber]);
// Orcs
var orcStronghold = new Location("Orc Stronghold", 'The stronghold of orcs! They are extremely strong!', 90, 'DarkGreen', [orc, orcWarrior, direWolf, goblinWarrior]);
var orcOutpost = new Location("Orc Outpost", 'A watchpost with an orc scouting body.', 80, 'OliveDrab', [orc, orcWarrior, goblinScout, goblinWarrior, wolf]);

var allLocs = [road, road1, plain, town, city, forest, cave, ruins, grave, tomb, bridge, river, elfVillage, elfCity, fairyGathering, goblinLair, orcStronghold, orcOutpost, bandits, banditKing];


var map = [
  [cave, grave, grave, grave,plain, road1, plain, orcOutpost, orcStronghold],
  [grave, tomb, grave, river, river, bridge, river, river, river],
  [cave, grave, grave, forest, plain, road1, plain, plain, plain],
  [forest, forest, forest, forest, forest, road, plain, plain, plain],
  [road1, road1, road, road, road, town, road1, road1, road1],
  [forest, elfVillage, forest, forest, fairyGathering, road, grave, grave, grave],
  [elfVillage, forest, forest, forest, forest, road1, plain, plain, plain],
  [elfVillage, forest, river, river, river, bridge, river, river, river],
  [elfVillage, forest, river, forest, forest, road1, plain, plain, plain],
  [elfCity, forest, fairyGathering, forest, forest, road, plain, bandits, bandits],
  [elfVillage, forest, forest, cave, forest, bridge, plain, bandits, bandits],
  [forest, cave, goblinLair, cave, cave, city, plain, plain, banditKing]
]
var visited = [
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered','Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Village', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered'],
  ['Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'Undiscovered', 'City of Wall', 'Undiscovered', 'Undiscovered', 'Undiscovered']
]

