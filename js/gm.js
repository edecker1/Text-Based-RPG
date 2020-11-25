// MAIN FUNCTIONS TO RUN GAME //

// Cap to reach the next level
let cap = (me.level * 100)/2;

// Function to find a random chanc eout of 100. Used for encounter chance
let randomChance = () => {
  let x = Math.random() * 100;
  return x;
}

// Create hero function
function createHero() {
  clear();
  let getStart = document.getElementById('start');
  getStart.innerHTML = "<div class='container bg-light'><br><label>Name:</label><input type='text' id='name' name='name' placeholder='Enter Name'><button class='btn btn-secondary' onclick='rollStats()'>Roll Stats</button><br><h4 id='endur' title='Increases your health'>Endurance: <small>0</small></h4><h4 id='str' title='Increases the amount of damage from your melee attacks'>Strength: <small>0</small></h4><h4 id='intel' title='Increases the amount of mana you can use and the damage of your spells'>Intelligence: <small>0</small></h4><h4 id='dext' title='Decreases chance of getting ambushed and increases chance of hitting an enemy'>Dexterity: <small>0</small></h4><br><button class='btn btn-dark' onclick='starts()'>Start Adventure</button><br><br></div><br>";

}

// Function to load stats
function rollStats(){
  let a = defineStats();
  let b = defineStats();
  let c = defineStats();
  let d = defineStats();

  $('#endur').html("<h4 id='endur' title='Increases your health'>Endurance: <small>"+a+"</small></h4>");
  me.end = a;
  $('#str').html("<h4 id='str' title='Increases the amount of damage from your melee attacks'>Strength: <small>"+b+"</small></h4>");
  me.str = b;
  $('#intel').html("<h4 id='intel' title='Increases the amount of mana you can use and the damage of your spells'>Intelligence: <small>"+c+"</small></h4>");
  me.inte = c;
  $('#dext').html("<h4 id='dext' title='Decreases chance of getting ambushed and increases chance of hitting an enemy'>Dexterity: <small>"+d+"</small></h4>");
  me.dext = d;
}

// This starts if there is a name inputeed
function starts(){
  // Set name and clear start div
  let getStart = document.getElementById('start');
  let name = document.getElementById('name').value;
  // If no name is present, alerts the user
  if (name == 0) {
    $('#head').after('<div class="alert alert-danger alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Please Enter a Name!</strong></div>');
    return;
  } else {
    me.name = name;
    getStart.innerHTML = "";
    standBy();
  }
}

//Styling functions for text
let color2 = (apple) => {
  if (apple == 1){
    return "class='enemys'";
  } else {
    return "class='players'";
  }
}

let color = (stat1, stat2) => {
  let colors = Math.round((stat1 / stat2) * 100);

  console.log("Hp %: " + colors);
  if (colors < 25) {
    return "class='low'";
  }
  else if (colors >= 25 && colors < 75){
    return "class='mid'";
  }
  else if (colors >= 75){
    return "class='high'";
  }

}
// Inputs the player info for battles
function playerInfo(){
  let getPlay = document.getElementById('player');
  getPlay.innerHTML = "<h6 title= 'Endurance: " + me.end + "\nStrength: " + me.str + "\nIntelligence: " + me.inte + "\nDexterity: " + me.dext + "\nAC Rating: " + me.ac + "'>Name: <small><span " + color2(2) + "> " + me.name + "</span></small></h6><h6>Level: <small> " + me.level + "</small></h6><div class='d-flex justify-content-center' style='padding:13px' title='XP: " + me.xp + " / " + cap + "'><div class='progress' style='width:20%'><div class='progress-bar bg-dark progress-bar-striped progress-bar-animated' style='width:"+ me.xps + "% ' ></div></div></div><h6>Health: <small> <span " + color(me.hp, me.maxHp) + ">" + me.hp + " </span> / " + me.maxHp + "</small></h6><h6>Mana: <small><span " + color(me.mp, me.maxMp) + ">" + me.mp + "</span> / " + me.maxMp + "</small></h6><h6 title= '" + me.equipped.description + "'>Weapon: <small>" + me.equipped.name + "</small></h6><h6 title= '" + me.armor.description + "'>Armor: <small>" + me.armor.name + "</small></h6>";
}

// This toggles the spells based on if the player knows them
function toggleSpells(){
  let x = 0;
  for (n of playerSpells){
    if (n == 0) {
      $("#"+x).hide()
    }
    x += 1;

  }
}

// Toggles the items based on if the player has them
let toggleItems = () => {
  let x = 20;
  for (n of inventory.potions){
    if (n.number == 0){
      $('#' + x).toggle();
    }
    x += 1;
  }
}
// This tcontains all of the battle items
function interactive() {
  let getInter = document.getElementById('interactive');
  getInter.innerHTML = "<div class='btn-group'><button type='button' class='btn btn-dark' onclick='pAttack()'>Attack</button><div class='btn-group'><button type='button' class='btn btn-dark dropdown-toggle' data-toggle='dropdown'>Magic</button><div class='btn btn-info dropdown-menu'><button title='"+ fireBall.description+"' id= '0' class='btn btn-info dropdown-item' onclick ='cast(fireBall)'>Fireball</button><button title='"+ iceShard.description+"'  id= '1' class='dropdown-item' onclick ='cast(iceShard)'>Ice Shards</button><button title='"+ healingHands.description+"'  id= '2' class='btn btn-info dropdown-item' onclick ='cast(healingHands)'>Healing Hands</button><button title='"+ deathlyTouch.description+"'  id= '3' class='btn btn-info dropdown-item' onclick ='cast(deathlyTouch)'>Deathly Touch</button><button title='"+ regenerate.description+"'  id= '4' class='btn btn-info dropdown-item' onclick ='cast(regenerate)'>Regenerate</button><button title='"+ lightning.description+"'  id= '5' class='btn btn-info dropdown-item' onclick ='cast(lightning)'>Kirin</button><button  title='"+hellFire.description+"'  id= '6' class='btn btn-info dropdown-item' onclick ='cast(hellFire)'>Amaterasu</button><button  title='"+arcaneMissiles.description+"'  id= '7' class='btn btn-info dropdown-item' onclick ='cast(arcaneMissiles)'>Arcane Missiles</button><button  title='"+rebirth.description+"'  id= '8' class='btn btn-info dropdown-item' onclick ='cast(rebirth)'>Rebirth</button><button  title='"+godsMight.description+"'  id= '9' class='btn btn-info dropdown-item' onclick ='cast(godsMight)'>Judgement</button><button  title='"+damn.description+"'  id= '10' class='btn btn-info dropdown-item' onclick ='cast(damn)'>Damnation</button></div></div><div class='btn-group'><button type='button' class='btn btn-dark dropdown-toggle' data-toggle='dropdown'>Items</button><div class='dropdown-menu'><button id='20' title='"+ health1.description +"'class='dropdown-item' onclick='chooseItem(health1)'>Minor Health Potion</button><button id='21' title='"+ health2.description +"' class='dropdown-item' onclick='chooseItem(health2)'>Health Potion</button><button id='22' title='"+ health3.description +"' class='dropdown-item' onclick='chooseItem(health3)'>Major Health Potion</button><button id='23' class='dropdown-item' title='"+ mana1.description +"'onclick='chooseItem(mana1)'>Minor Mana Potion</button><button id='24' class='dropdown-item' title='"+ mana2.description +"'onclick='chooseItem(mana2)'>Mana Potion</button><button id='25' class='dropdown-item' title='"+ mana3.description +"'onclick='chooseItem(mana3)'>Major Mana Potion</button></div><button class='btn btn-warning' title='Attempt to run away!' onclick='escape()'>Flee</button></div></div>";
  toggleSpells();
  toggleItems();
}
// This is the text log for the battle
let textBoxes = () => {
  let getBox = document.getElementById('textBox');
  getBox.innerHTML = "<br><div class = 'boxMan'><p id='startCombat'>-- Welcome to Combat! --</p></div><br>"
  
}

// I'm going to try to figure out some jquery here to solve this
// This adds text to the text log
function continueText(apple, banana){
  $( "#startCombat" ).prepend( '<p class = "boxText '+banana+'"> ' + apple + ' </p>');
}
// This creates the enemy info for battle
function enemys() {
  let getEnemys = document.getElementById('enemy');
  if (enemy.mp > 0) {
    getEnemys.innerHTML = "<h4>Enemy</h4><h6 title=' " + enemy.description + "'>Name: <small><span " + color2(1) + "> " + enemy.name + "</span></small></h6><h6>Health: <small><span " + color(enemy.hp, enemy.maxHp) + ">" + enemy.hp + "</span> / " + enemy.maxHp + "</small></h6><h6>Mana: <small><span " + color(enemy.mp, enemy.maxMp) + ">" + enemy.mp + "</span> / " + enemy.maxMp + "</small></h6><h6 title='"+ enemy.equipped.description +"'>Weapon: <small>" + enemy.equipped.name + "</small></h6><h6 title='"+ enemy.armor.description + "'>Armor: <small>" + enemy.armor.name + "</small></h6>";
  } else {
    getEnemys.innerHTML = "<h3>Enemy</h3><h6 title=' " + enemy.description + "'>Name: <small><span " + color2(1) + "> "  + enemy.name + "</span></small></h6><h6>Health: <small><span " + color(enemy.hp, enemy.maxHp) + ">" + enemy.hp + "</span> / " + enemy.maxHp + "</small></h6><h6 title='"+ enemy.equipped.description +"'>Weapon: <small>" + enemy.equipped.name + "</small></h6><h6 title='"+ enemy.armor.description + "'>Armor: <small>" + enemy.armor.name + "</small></h6>";
  }

}
// This begins a new battle
function newBattle() {
  clear();
  newEnemy();
  playerInfo();
  interactive();
  textBoxes();
  enemys();

}
// Updates battlepage
function battlePage(){
  clear2()
  playerInfo();
  interactive();
  enemys();
}
// Screen when at camp 
function standBy() {
  clear()
  let getStand = document.getElementById('standby');
  // Shop menu //
  if (findLocName() == 'Village'){
    getStand.innerHTML = "<h2 class='display-3 title'>Village of Talle</h2><h5>Camps Left: " + me.camps + "</h5><h4 class='text-secondary fantasy'>"+ findLocDesc() + "</h4><h5>What would you like to do?</h5><br><div class='btn-group'><button onclick ='inventoryScreen()' class='btn btn-dark'>View Inventory</button><button onclick ='rest()' class='btn btn-dark'>Rest</button><button onclick ='shop()' class='btn btn-dark'>Shop</button><button onclick ='viewStats()' class='btn btn-dark'>View Player</button><button onclick ='mapScreen()' class='btn btn-dark'>Map</button><button onclick ='saveScreen()' class='btn btn-light'>Save</button></div><br><br><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(1)'>North</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(4)'>West</button><button type='button' class='btn btn-secondary' onclick = 'travel(3)'>East</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(2)'>South</button></div>";
  } else if (findLocName() == 'City of Wall'){
    getStand.innerHTML = "<h2 class='display-3 title'>City of Wall</h2><h5>Camps Left: " + me.camps + "</h5><h4 class='text-secondary fantasy'>"+ findLocDesc() + "</h4><h5>What would you like to do?</h5><br><div class='btn-group'><button onclick ='inventoryScreen()' class='btn btn-dark'>View Inventory</button><button onclick ='rest()' class='btn btn-dark'>Rest</button><button onclick ='cityShop()' class='btn btn-dark'>Shop</button><button onclick ='viewStats()' class='btn btn-dark'>View Player</button><button onclick ='mapScreen()' class='btn btn-dark'>Map</button><button onclick ='saveScreen()' class='btn btn-light'>Save</button></div><br><br><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(1)'>North</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(4)'>West</button><button type='button' class='btn btn-secondary' onclick = 'travel(3)'>East</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(2)'>South</button></div>";

  } else {
    getStand.innerHTML = "<h2 class='display-3 title'>Camp</h2><h5>Camps Left: " + me.camps + "</h5><h3 class='fantasy'>"+ findLocName() + "</h3><h4 class='text-secondary fantasy'>"+ findLocDesc() + "</h4><h5>What would you like to do?</h5><br><div class='btn-group'><button onclick ='newBattle()' class='btn btn-dark'>Find Enemy</button><button onclick ='inventoryScreen()' class='btn btn-dark'>View Inventory</button><button onclick ='rest()' class='btn btn-dark'>Rest</button><button onclick ='viewStats()' class='btn btn-dark'>View Player</button><button onclick ='mapScreen()' class='btn btn-dark'>Map</button><button onclick ='saveScreen()' class='btn btn-light'>Save</button></div><br><br><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(1)'>North</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(4)'>West</button><button type='button' class='btn btn-secondary' onclick = 'travel(3)'>East</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'travel(2)'>South</button></div>";
  }
}
// CLears the screen
function clear() {
  let getStart = document.getElementById("start");
  let getEnemys = document.getElementById('enemy');
  let getPlay = document.getElementById('player');
  let getStand = document.getElementById('standby');
  let getInter = document.getElementById('interactive');
  let getShops = document.getElementById('shop');
  let getBox = document.getElementById('textBox');

  getBox.innerHTML = "";
  getStart.innerHTML = "";
  getEnemys.innerHTML = "";
  getPlay.innerHTML = "";
  getStand.innerHTML = "";
  getInter.innerHTML = "";
  getShops.innerHTML = "";
}
// Clears teh screen except for text box
function clear2() {
  let getStart = document.getElementById("start");
  let getEnemys = document.getElementById('enemy');
  let getPlay = document.getElementById('player');
  let getStand = document.getElementById('standby');
  let getInter = document.getElementById('interactive');
  let getShops = document.getElementById('shop');

  getStart.innerHTML = "";
  getEnemys.innerHTML = "";
  getPlay.innerHTML = "";
  getStand.innerHTML = "";
  getInter.innerHTML = "";
  getShops.innerHTML = "";
}
// Object as a empty item
var Nothing = {
  name: 'Nothing',
  description: 'Empty Slot',
  number: 0
};
// Function dispays the inventory screen. Needs to be reworked a little
function inventoryScreen() {
  clear();
  let i =0;
  //Total Inventory
  let j = [];

  // Weapons
  let w = [];
  // Armor
  let a = [];
  // Usable Items

  while (i <= 8) {
    if (inventory.items[i]) {
      j.push(inventory.items[i]);
      if ((inventory.items[i] instanceof Weapon) == true) {
        w.push(inventory.items[i])
        console.log('Logged a Weapon');
      } else if ((inventory.items[i] instanceof Armor) == true) {
        a.push(inventory.items[i])
        console.log('Logged a Armor');
      } 
    } else {
      j.push(Nothing);
    }
    i = i + 1;
  }
  //List
  let getStart = document.getElementById('start');
  //Weapons Equip
  let getStand = document.getElementById('standby');
  //Armor Equip
  let getShop = document.getElementById('shop');
  //Usable 
  let getPlayer = document.getElementById('player');
  //Back
  let getEnemy = document.getElementById('enemy');

  //Potions list
  let p1 = inventory.potions[0].number;
  let p2 = inventory.potions[1].number;
  let p3 = inventory.potions[2].number;
  let p4 = inventory.potions[3].number;
  let p5 = inventory.potions[4].number;
  let p6 = inventory.potions[5].number;
  

  //Inventory List
  getStart.innerHTML = "<h3 class='display-4'>Inventory Screen</h3><br><h5 class='display-5'>You have <span class='badge badge-warning'>"+inventory.gold+" gold coins</span>!<br><br><div class='container'><table class='table table-dark table-striped'><thead><tr><th>Minor Health Potions</th><th>Health Potions</th><th>Major Health Potions</th><th>Minor Mana Potions</th><th>Mana Potions</th><th>Major Mana Potions</th></tr></thead><tbody><tr><td>"+p1+"</td><td>"+p2+"</td><td>"+p3+"</td><td>"+p4+"</td><td>"+p5+"</td><td>"+p6+"</td></tr></tbody></table></div><div class='inventory container'><div class='row'><div class='col-sm-4'><p title='"+ j[0].description + "'>(1.) "+ j[0].number + " x " + j[0].name + "</p></div><div class='col-sm-4' ><p title='"+ j[1].description + "'>(2.) "+ j[1].number + " x " + j[1].name + "</p></div><div class='col-sm-4'><p title='"+ j[2].description + "'>(3.) "+ j[2].number + " x " + j[2].name + "</p></div></div><div class='row'><div class='col-sm-4' ><p title='"+ j[3].description + "'>(4.) "+ j[3].number + " x " + j[3].name + "</p></div><div class='col-sm-4'><p title='"+ j[4].description + "'>(5.) "+ j[4].number + " x " + j[4].name + "</p></div><div class='col-sm-4'><p title='"+ j[5].description + "'>(6.) "+ j[5].number + " x " + j[5].name + "</p></div></div><div class='row'><div class='col-sm-4'><p title='"+ j[6].description + "'>(7.) "+ j[6].number + " x " + j[6].name + "</p></div><div class='col-sm-4' ><p title='"+ j[7].description + "'>(8.) "+ j[7].number + " x " + j[7].name + "</p></div><div class='col-sm-4'><p title='"+ j[8].description + "'>(9.) "+ j[8].number + " x " + j[8].name + "</p></div></div></div></div>";

  // Equip Weapons?
  getStand.innerHTML = "<br><div class='.container'><h4 id='weaponTitle'>You can Equip the following weapons: </h4><br></div>";
  for (i = 0; i < w.length; i++){
    let pizza = w[i];
    $('#weaponTitle').append("<br><button class='btn btn-dark' id="+ i +" title= '" + w[i].description + "'>" + w[i].name + "</button>")
    $('#'+i).click(function() {
      me.equipWeapon(pizza);
    });
  }

  //Equip Armor
  getShop.innerHTML = "<br><div class='.container'><h4 id='armorTitle'>You can Equip the Following Armor: </h4><br></div>";
  let z = 10;
  for (i = 0; i < a.length; i++){
    let pizza = a[i];
    $('#armorTitle').append("<br><button class='btn btn-dark' id="+ z +" title= '" + a[i].description + "'>" + a[i].name + "</button>")
    $('#'+z).click(function() {
      me.equipArmor(pizza);
    });
    z += 1;
  }

  // Usables 
  getPlayer.innerHTML = "<br><div class='.container'><h4 id='usableTitle'>You can Use the Following Items: </h4><br></div>";
  let p = 20;
  for (i = 0; i < inventory.potions.length; i++){
    console.log(inventory.potions[i])
    let cake = inventory.potions[i];
    $('#usableTitle').append("<br><button class='btn btn-dark' id="+ p +" title= '" + cake.description + "'>" + cake.name + "</button>")
    $('#'+p).click(function() {
      if (cake.number > 1) {
        useItem(cake);
      } else {
        useItem(cake);
        $(this).toggle();
      }
    });
    if (inventory.potions[i].number == 0) {
      $('#'+p).toggle();
    }
    p += 1;
  }
  // Back
  getEnemy.innerHTML = "<br><button onclick ='standBy()' class='btn btn-danger'>Back</button>";


}

// Resting function w/ chance of ambush
function rest(){
  if (me.camps > 0){
    let total = 0, i = 0;
    for (i=0; i<7; i++){
      total = diceRoll(10) + total;
    }

    if ((me.hp + total) > me.maxHp){
      me.hp = me.maxHp;
      if ((me.mp + total) > me.maxMp){
        me.mp = me.maxMp;
        alert("You have fully rested!");
      }
      else {
        me.mp = me.mp + total;
        alert("You have rested!");
      }
    } else {
      me.hp = me.hp + total;
      if ((me.mp + total) > me.maxMp){
        me.mp = me.maxMp;
        alert("You have rested!");
      }
      else {
        me.mp = me.mp + total;
        alert("You have rested!");
      }
    }

    me.camps -= 1;
    standBy();
  }
  else {
    alert("You do not have enough supplies to set up camp!");
  }
}

//View Stats
function leaveView() {
 document.getElementById("standby").style.display = "none";
 standBy();
 $("#standby").fadeToggle();
}
// Screen to view all of the stats of the player
function viewStats(){
  clear();
  let perc = 0
  let total = me.hit + me.miss;
  if (total != 0){
    perc = (me.hit / total) * 100;
    perc = Math.round(perc);
  }
  let getStand = document.getElementById('standby');
  document.getElementById("standby").style.display = "none";
  getStand.innerHTML = "<div class='container' id='view'><h3 class='display-3'> " + me.name + "</h3><br> <h4>Level: <span class='badge badge-pill badge-primary'>" + me.level + "</span></h4><h4>XP: <span class='badge badge-pill badge-primary'>" + me.xp + " / " + cap + "</span></h4><h4>Endurance: <span class='badge badge-pill badge-dark'>"+ me.end + "</span></h4><h4>Strength: <span class='badge badge-pill badge-dark'>"+ me.str + "</span></h4><h4>Dexterity: <span class='badge badge-pill badge-dark'>"+ me.dext + "</span></h4><h4>Intelligence: <span class='badge badge-pill badge-dark'>"+ me.inte + "</span></h4><h4>AC Rating: <span class='badge badge-pill badge-light'>"+ me.ac + "</span></h4><h4>Equipped Weapon: <small>"+ me.equipped.name + "</small></h4><h4>Equipped Armor: <small>"+ me.armor.name + "</small></h4><br><h4>Wealth: <span class='badge badge-pill badge-warning'>"+ inventory.gold + " gold coins</span></h4><h4>Miles Travelled: <span class='badge badge-pill badge-secondary'>"+ me.traveled + "</span></h4><h4>Monsters Killed: <span class='badge badge-pill badge-danger'>"+ me.killed + "</span></h4><h4>Total Times Attacked: <span class='badge badge-pill badge-secondary'>"+ total + "</span></h4><h4>Total Hits: <span class='badge badge-pill badge-secondary'>"+ me.hit + "</span></h4><h4>Total Misses: <span class='badge badge-pill badge-secondary'>"+ me.miss + "</span></h4><h4>Hit Percentage: <span class='badge badge-pill badge-secondary'>"+ perc + "%</span></h4><h4>Spells Cast: <span class='badge badge-pill badge-secondary'>"+ me.spells + "</span></h4><br><br></div><button onclick ='leaveView()' class='btn btn-danger'>Back</button>";
  $("#standby").fadeIn(1500);
}
// Screen for when tey level up
let levelUpScreen = () => {
  console.log("");
  console.log("STarting")
  clear();
  me.level = me.level + 1;
  var audio = new Audio('Sounds/QuestCompleted.wav');
  audio.play();
  let a = me.maxHp;
  let b = me.maxMp;
  me.levelUp();
  me.maxMp += 10;
  me.maxHp += 15;
  me.mp = me.maxMp;
  me.hp = me.maxHp;
  me.xp = (me.xp - cap);
  cap = (me.level * 100) / 2;
  console.log("XP: " + me.xp);
  let perc = (me.xp / cap) * 100;
  me.xps = perc;
  newEnemy();
  battleTime = false;
  let unlock = levelUnlock();
  if (unlock === 'Nothing') {
    console.log("Nothing was unlocked")
    let getStart = document.getElementById('start');
    getStart.innerHTML = "<div class='container'><h2 class='display-2'>Congratulations!</h2><br><h4>You have leveled up from <span class='badge badge-secondary'>"+(me.level-1)+"</span> to <span class='badge badge-secondary'>"+(me.level)+"</span>!</h4><br><br><h4><span class='badge badge-danger'>"+a+" health</span> -> <span class='badge badge-danger'>"+me.maxHp+" health</span></h4><h4><span class='badge badge-info'>"+b+" mana</span> -> <span class='badge badge-info'>"+me.maxMp+" mana<span></h4><br><h4><span class='badge badge-pill badge-success'>Endurance</span>: "+(me.end - 1)+" -> "+me.end+"</h4><h4><span class='badge badge-pill badge-danger'>Strength</span>: "+(me.str - 1)+" -> "+me.str+"</h4><h4><span class='badge badge-pill badge-warning'>Dexterity</span>: "+(me.dext - 1)+" -> "+me.dext+"</h4><h4><span class='badge badge-pill badge-primary'>Intelligence</span>: "+(me.inte - 1)+" -> "+me.inte+"</h4><br><button class='btn btn-dark' onclick='standBy()'>Continue</button></div>"
  } else {
    let getStart = document.getElementById('start');
    getStart.innerHTML = "<div class='container'><h2 class='display-2'>Congratulations!</h2><br><h4>You have leveled up from <span class='badge badge-secondary'>"+(me.level-1)+"</span> to <span class='badge badge-secondary'>"+(me.level)+"</span>!</h4><h4>You unlocked "+unlock.name+"!</h4><h4>"+unlock.description+"</h4><br><br><h4><span class='badge badge-danger'>"+a+" health</span> -> <span class='badge badge-danger'>"+me.maxHp+" health</span></h4><h4><span class='badge badge-info'>"+b+" mana</span> -> <span class='badge badge-info'>"+me.maxMp+" mana<span></h4><br><h4><span class='badge badge-pill badge-success'>Endurance</span>: "+(me.end - 1)+" -> "+me.end+"</h4><h4><span class='badge badge-pill badge-danger'>Strength</span>: "+(me.str - 1)+" -> "+me.str+"</h4><h4><span class='badge badge-pill badge-warning'>Dexterity</span>: "+(me.dext - 1)+" -> "+me.dext+"</h4><h4><span class='badge badge-pill badge-primary'>Intelligence</span>: "+(me.inte - 1)+" -> "+me.inte+"</h4><br><button class='btn btn-dark' onclick='standBy()'>Continue</button></div>"
  }
  console.log("finished leveling up")
}
// Finds spot on map
let findSpot = () => {
  let x = me.x * 10;
  let y = me.y;
  let z = x + y;
  return z;
}
let mapScreen = () => {
  clear();
  let start = document.getElementById('start');
  start.innerHTML = "<table class='table table-dark table-striped'><thead><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><tbody><tr><td id='0'>"+visited[0][0]+"</td><td id='1'>"+visited[0][1]+"</td><td id='2'>"+visited[0][2]+"</td><td id='3'>"+visited[0][3]+"</td><td id='4'>"+visited[0][4]+"</td><td id='5'>"+visited[0][5]+"</td><td id='6'>"+visited[0][6]+"</td><td id='7'>"+visited[0][7]+"</td><td id='8'>"+visited[0][8]+"</td></tr><tr><td id='10'>"+visited[1][0]+"</td><td id='11'>"+visited[1][1]+"</td><td id='12'>"+visited[1][2]+"</td><td id='13'>"+visited[1][3]+"</td><td id='14'>"+visited[1][4]+"</td><td id='15'>"+visited[1][5]+"</td><td id='16'>"+visited[1][6]+"</td><td id='17'>"+visited[1][7]+"</td><td id='18'>"+visited[1][8]+"</td></tr><tr><td id='20'>"+visited[2][0]+"</td><td id='21'>"+visited[2][1]+"</td><td id='22'>"+visited[2][2]+"</td><td id='23'>"+visited[2][3]+"</td><td id='24'>"+visited[2][4]+"</td><td id='25'>"+visited[2][5]+"</td><td id='26'>"+visited[2][6]+"</td><td id='27'>"+visited[2][7]+"</td><td id='28'>"+visited[2][8]+"</td></tr><tr><td id='30'>"+visited[3][0]+"</td><td id='31'>"+visited[3][1]+"</td><td id='32'>"+visited[3][2]+"</td><td id='33'>"+visited[3][3]+"</td><td id='34'>"+visited[3][4]+"</td><td id='35'>"+visited[3][5]+"</td><td id='36'>"+visited[3][6]+"</td><td id='37'>"+visited[3][7]+"</td><td id='38'>"+visited[3][8]+"</td></tr><tr><td id='40'>"+visited[4][0]+"</td><td id='41'>"+visited[4][1]+"</td><td id='42'>"+visited[4][2]+"</td><td id='43'>"+visited[4][3]+"</td><td id='44'>"+visited[4][4]+"</td><td id='45'>"+visited[4][5]+"</td><td id='46'>"+visited[4][6]+"</td><td id='47'>"+visited[4][7]+"</td><td id='48'>"+visited[4][8]+"</td></tr><tr><td id='50'>"+visited[5][0]+"</td><td id='51'>"+visited[5][1]+"</td><td id='52'>"+visited[5][2]+"</td><td id='53'>"+visited[5][3]+"</td><td id='54'>"+visited[5][4]+"</td><td id='55'>"+visited[5][5]+"</td><td id='56'>"+visited[5][6]+"</td><td id='57'>"+visited[5][7]+"</td><td id='58'>"+visited[5][8]+"</td></tr><tr><td id='60'>"+visited[6][0]+"</td><td id='61'>"+visited[6][1]+"</td><td id='62'>"+visited[6][2]+"</td><td id='63'>"+visited[6][3]+"</td><td id='64'>"+visited[6][4]+"</td><td id='65'>"+visited[6][5]+"</td><td id='66'>"+visited[6][6]+"</td><td id='67'>"+visited[6][7]+"</td><td id='68'>"+visited[6][8]+"</td></tr><tr><td id='70'>"+visited[7][0]+"</td><td id='71'>"+visited[7][1]+"</td><td id='72'>"+visited[7][2]+"</td><td id='73'>"+visited[7][3]+"</td><td id='74'>"+visited[7][4]+"</td><td id='75'>"+visited[7][5]+"</td><td id='76'>"+visited[7][6]+"</td><td id='77'>"+visited[7][7]+"</td><td id='78'>"+visited[7][8]+"</td></tr><tr><td id='80'>"+visited[8][0]+"</td><td id='81'>"+visited[8][1]+"</td><td id='82'>"+visited[8][2]+"</td><td id='83'>"+visited[8][3]+"</td><td id='84'>"+visited[8][4]+"</td><td id='85'>"+visited[8][5]+"</td><td id='86'>"+visited[8][6]+"</td><td id='87'>"+visited[8][7]+"</td><td id='88'>"+visited[8][8]+"</td></tr><tr><td id='90'>"+visited[9][0]+"</td><td id='91'>"+visited[9][1]+"</td><td id='92'>"+visited[9][2]+"</td><td id='93'>"+visited[9][3]+"</td><td id='94'>"+visited[9][4]+"</td><td id='95'>"+visited[9][5]+"</td><td id='96'>"+visited[9][6]+"</td><td id='97'>"+visited[9][7]+"</td><td id='98'>"+visited[9][8]+"</td></tr><tr><td id='100'>"+visited[10][0]+"</td><td id='101'>"+visited[10][1]+"</td><td id='102'>"+visited[10][2]+"</td><td id='103'>"+visited[10][3]+"</td><td id='104'>"+visited[10][4]+"</td><td id='105'>"+visited[10][5]+"</td><td id='106'>"+visited[10][6]+"</td><td id='107'>"+visited[10][7]+"</td><td id='108'>"+visited[10][8]+"</td></tr><tr><td id='110'>"+visited[11][0]+"</td><td id='111'>"+visited[11][1]+"</td><td id='112'>"+visited[11][2]+"</td><td id='113'>"+visited[11][3]+"</td><td id='114'>"+visited[11][4]+"</td><td id='115'>"+visited[11][5]+"</td><td id='116'>"+visited[11][6]+"</td><td id='117'>"+visited[11][7]+"</td><td id='118'>"+visited[11][8]+"</td></tr></tbody></table>";
  for (i=0; i < 119; i++){
    // If its at a point where theres no 
    if ((i % 10) == 9) {
      //pass
    } else {
      // This is to check if undiscovered or not
      let x = document.getElementById(i);
      // If undiscorvered, change text color to grey
      if (x.innerHTML === 'Undiscovered') {
        $('#'+i).css('color', 'grey');
      }
      // COlorize the rest of the options for cooler presentation
      if (x.innerHTML === 'Road') {
        $('#'+i).css('color', 'Azure');
      }
      if (x.innerHTML === 'Compromised Road') {
        $('#'+i).css('color', 'Azure');
      }
      if (x.innerHTML === 'River') {
        $('#'+i).css('color', 'CornflowerBlue');
      }
      if (x.innerHTML === 'Forest') {
        $('#'+i).css('color', 'DarkGreen');
      }
      if (x.innerHTML === 'Bridge') {
        $('#'+i).css('color', 'Bisque');
      }
      if (x.innerHTML === 'Desolate Plain') {
        $('#'+i).css('color', 'DarkKhaki');
      }
      if (x.innerHTML === 'Dark Graveyard') {
        $('#'+i).css('color', 'DarkViolet');
      }
      if (x.innerHTML === 'Necrotic Tomb') {
        $('#'+i).css('color', 'RebeccaPurple');
      }
      if (x.innerHTML === 'Bandit Hideout') {
        $('#'+i).css('color', 'OrangeRed');
      }
      if (x.innerHTML === 'Bandit Fortress') {
        $('#'+i).css('color', 'Red');
      }
      if (x.innerHTML === 'Elf Village') {
        $('#'+i).css('color', 'Olive');
      }
      if (x.innerHTML === 'Elf City') {
        $('#'+i).css('color', 'DarkOliveGreen');
      }
      if (x.innerHTML === 'Cave') {
        $('#'+i).css('color', 'Ivory');
      }
      if (x.innerHTML === 'Goblin Lair') {
        $('#'+i).css('color', 'Silver');
      }
      if (x.innerHTML === 'Fairy Gathering') {
        $('#'+i).css('color', 'SpringGreen');
      }
      if (x.innerHTML === 'Orc Outpost') {
        $('#'+i).css('color', 'OliveDrab');
      }
      if (x.innerHTML === 'Orc Stronghold') {
        $('#'+i).css('color', 'DarkGreen');
      }
      if (x.innerHTML === 'Village' || x.innerHTML === 'City of Wall') {
        $('#'+i).css({'color':'GhostWhite', 'font-size':'1.25em'});
      }
    }
  }
  $('#'+findSpot()).css({'border':'2px solid white', 'border-radius':'12px','background-color':'DarkSlateGrey', 'opacity':'0.5'});
  let back = document.getElementById('shop');
  back.innerHTML = "<button class='btn btn-dark' onclick='standBy()'>Back</button>";
}

// Win screen from a battle
let winScreen = () => {
  clear()
  let overlay = document.getElementById('start');
  overlay.innerHTML = "<br><div class='container'><h4>Congratulations! You have defeated "+enemy.name+"!</h4><br><h5>You have gained <span class='badge badge-warning'>"+loot()+" gold coins<span>!</h5></div><br><button class='btn btn-dark' onclick='standBy()'>Back</button>"
}


