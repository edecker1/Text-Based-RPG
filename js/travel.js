// FUNCTIONS RELATING TO TRAVEL //

class Location {
  constructor(name, description, chance) {
    this.name = name;
    this.description = description;
    this.chance = chance;
  }
}


function findLocName() {
  return map[me.x][me.y].name;
}
function findLocDesc() {
  return map[me.x][me.y].description;
}

console.log()
// All locations
var road = new Location('Road', "A worn road that's been well traveled.", 20);
var road1 = new Location('Compromised Road', "A worn road that's been compromised by bandits", 65)
var plain = new Location("Desolate Plain", 'An open plain that does not have much life...', 20);
var town = new Location('Village', "A small village that has some small shops available.", 0);
var city = new Location('City of Wall', 'A small human city with giant walls', 35);
var forest = new Location('Forest', "A winding forest full of dangers and goods...", 45);
var cave = new Location('Cave', "A dark cave that is home to many monsters.", 70, 0);
var ruins = new Location('Abandoned Ruins', "Dark, shattered remnants of past settlements...", 85);
var grave = new Location('Dark Graveyard', 'A dark place littered with graves and bones...', 70);
var tomb = new Location("Necrotic Tomb", 'A tomb that exudes terrible necrotic energies...', 95)
var bridge = new Location("Bridge", 'A bridge that appears to be compromised...', 95);
var river = new Location("River", 'A shallow river full of interesting finds...', 40);
var elfVillage = new Location("Elf Village", 'A village of elves. They do not seem very friendly...', 80);
var elfCity = new Location("Elf City", 'A city of elves. You should not have come here...', 100);
var fairyGathering = new Location("Fairy Gathering", 'A meeting place for fairies. They do not take kindly to strangers...', 65);
var goblinLair = new Location("Goblin Lair", 'A lair crawling with goblins!', 90);
var orcStronghold = new Location("Orc Stronghold", 'The stronghold of orcs! They are extremely strong!', 90);
var orcOutpost = new Location("Orc Outpost", 'A watchpost with an orc scouting body.', 80);
var bandits = new Location("Bandit Hideout", 'Territory claimed by bandits and thieves', 70);
var banditKing = new Location("Bandit Fortress", "A infamous fortress housing the one known as the 'Bandit King'...", 100)


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
let discover = () => {
  if (visited[me.x][me.y] === 'Undiscovered'){
    visited[me.x][me.y] = (map[me.x][me.y].name);
  } else {
    return;
  }
}
let battleTime = false
// 1 = north
// 2 = south
// 3 = east
// 4 = west
function travel(direction) {
  if (direction == 1) {
    if (me.x == 0){
      alert("Cannot travel further north!");
      return;
    } else {
      me.x = me.x - 1;
      discover();
      me.traveled += 1;
      ambush((map[me.x][me.y].chance))
    }
  }
  else if (direction == 2) {
    if (me.x == 11){
      alert("Cannot travel further south!");
      return;
    } else {
      me.x = me.x + 1;
      discover();
      me.traveled += 1;
      ambush((map[me.x][me.y].chance))
    }
  }
  else if (direction == 3) {
    if (me.y == 8){
      alert("Cannot travel further east!");
      return;
    } else {
      me.y = me.y + 1;
      discover();
      me.traveled += 1;
      ambush((map[me.x][me.y].chance))
    }
  }
  else if (direction == 4) {
    if (me.y == 0) {
      alert("You cannot travel further west!");
      return;
    } else {
      me.y = me.y - 1;
      discover();
      me.traveled += 1;
      ambush((map[me.x][me.y].chance))
    }
  }
  if (battleTime == false) {
    console.log("X = " + me.x);
    console.log("y = " + me.y);
    standBy();
  }
}

let ambush = (chance) => {
  let r = randomChance();
  let d = (me.dext * .5)
  console.log("Added " + d)
  r += d;
  console.log("Ambush chance is " + r + " versus location chance " + chance);
  if (r <= chance){
    alert("You have been ambushed!");
    newBattle();
    battleTime = true;
    console.log('BATTLE TIME')
  } else {
    console.log("Avoided Ambush")
  }
}
