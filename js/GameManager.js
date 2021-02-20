// MAIN FUNCTIONS TO RUN GAME //
let GameManager = {
  // This will have all functions to manage the game

  // Variables getting the DOM elements
  start : document.getElementById('start'),
  player : document.getElementById('player'),
  stand : document.getElementById('standby'),
  enemy : document.getElementById('enemy'),
  interactive : document.getElementById('interactive'),
  shop : document.getElementById('shop'),
  textbox : document.getElementById('textBox'),

  battleTime : false,


  clear : function() {
    this.start.innerHTML = "";
    this.player.innerHTML = "";
    this.stand.innerHTML = "";
    this.enemy.innerHTML = "";
    this.stand.innerHTML = "";
    this.interactive.innerHTML = "";
    this.shop.innerHTML = "";
    this.textbox.innerHTML = "";
  },


  createHero : function() {
    this.clear();
    this.start.innerHTML = "<div class='container bg-light'><br><label>Name:</label><input type='text' id='name' name='name' placeholder='Enter Name'><button class='btn btn-secondary' onclick='GameManager.rollStats()'>Roll Stats</button><br><h4 id='endur' title='Increases your health'>Endurance: <small>"+me.end+"</small></h4><h4 id='str' title='Increases the amount of damage from your melee attacks'>Strength: <small>"+me.str+"</small></h4><h4 id='intel' title='Increases the amount of mana you can use and the damage of your spells'>Intelligence: <small>"+me.inte+"</small></h4><h4 id='dext' title='Decreases chance of getting ambushed and increases chance of hitting an enemy'>Dexterity: <small>"+me.dext+"</small></h4><br><button class='btn btn-dark' onclick='GameManager.startGame()'>Start Adventure</button><br><br></div><br>";
  },

  rollStats : function() {
    me.end = me.defineStats();
    let a = me.end;
    me.str = me.defineStats();
    let b = me.str;
    me.inte = me.defineStats();
    let c = me.inte;
    me.dext = me.defineStats();
    let d = me.dext;

    $('#endur').html("<h4 id='endur' title='Increases your health'>Endurance: <small>"+a+"</small></h4>");
    $('#str').html("<h4 id='str' title='Increases the amount of damage from your melee attacks'>Strength: <small>"+b+"</small></h4>");
    $('#intel').html("<h4 id='intel' title='Increases the amount of mana you can use and the damage of your spells'>Intelligence: <small>"+c+"</small></h4>");
    $('#dext').html("<h4 id='dext' title='Decreases chance of getting ambushed and increases chance of hitting an enemy'>Dexterity: <small>"+d+"</small></h4>");
  },

  startGame : function() {
    // Set name and clear start div
    let name = document.getElementById('name').value;
    // If no name is present, alerts the user
    if (name == 0) {
      $('#head').after('<div class="alert alert-danger alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Please Enter a Name!</strong></div>');
      return;
    } else {
      me.name = name;
      this.start.innerHTML = "";
      this.standby();
    }
  },

  standby : function() {
    this.clear()
    // Shop menu //
    if (findLocName() == 'Village'){
      this.stand.innerHTML = "<h2 class='display-3 title'>Village of Talle</h2><h5>Camps Left: " + me.camps + "</h5><h4 class='text-secondary fantasy'>"+ findLocDesc() + "</h4><h5>What would you like to do?</h5><br><div class='btn-group'><button onclick ='GameManager.inventory()' class='btn btn-dark'>View Inventory</button><button onclick ='me.rest()' class='btn btn-dark'>Rest</button><button onclick ='shop()' class='btn btn-dark'>Shop</button><button onclick ='GameManager.viewStats()' class='btn btn-dark'>View Player</button><button onclick ='GameManager.map()' class='btn btn-dark'>Map</button><button onclick ='saveScreen()' class='btn btn-light'>Save</button></div><br><br><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(1)'>North</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(4)'>West</button><button type='button' class='btn btn-secondary' onclick = 'me.travel(3)'>East</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(2)'>South</button></div>";
    } else if (findLocName() == 'City of Wall'){
      this.stand.innerHTML = "<h2 class='display-3 title'>City of Wall</h2><h5>Camps Left: " + me.camps + "</h5><h4 class='text-secondary fantasy'>"+ findLocDesc() + "</h4><h5>What would you like to do?</h5><br><div class='btn-group'><button onclick ='inventoryScreen()' class='btn btn-dark'>View Inventory</button><button onclick ='me.rest()' class='btn btn-dark'>Rest</button><button onclick ='cityShop()' class='btn btn-dark'>Shop</button><button onclick ='GameManager.viewStats()' class='btn btn-dark'>View Player</button><button onclick ='GameManager.map()' class='btn btn-dark'>Map</button><button onclick ='saveScreen()' class='btn btn-light'>Save</button></div><br><br><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(1)'>North</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(4)'>West</button><button type='button' class='btn btn-secondary' onclick = 'me.travel(3)'>East</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(2)'>South</button></div>";

    } else {
      this.stand.innerHTML = "<h2 class='display-3 title'>Camp</h2><h5>Camps Left: " + me.camps + "</h5><h3 class='fantasy'>"+ findLocName() + "</h3><h4 class='text-secondary fantasy'>"+ findLocDesc() + "</h4><h5>What would you like to do?</h5><br><div class='btn-group'><button onclick ='Battle.newBattle()' class='btn btn-dark'>Find Enemy</button><button onclick ='inventoryScreen()' class='btn btn-dark'>View Inventory</button><button onclick ='me.rest()' class='btn btn-dark'>Rest</button><button onclick ='GameManager.viewStats()' class='btn btn-dark'>View Player</button><button onclick ='GameManager.map()' class='btn btn-dark'>Map</button><button onclick ='saveScreen()' class='btn btn-light'>Save</button></div><br><br><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(1)'>North</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(4)'>West</button><button type='button' class='btn btn-secondary' onclick = 'me.travel(3)'>East</button></div><div class='d-flex justify-content-center directions'><button type='button' class='btn btn-secondary' onclick = 'me.travel(2)'>South</button></div>";
    }
  },

  // Inventory Dealings
  createPotionTable : function(){
    let text = "<div class='container'><table class='table table-dark table-striped'><thead><tr><th>"+me.inventory.potions[0].name+"</th><th>"+me.inventory.potions[1].name+"</th><th>"+me.inventory.potions[2].name+"</th><th>"+me.inventory.potions[3].name+"</th><th>"+me.inventory.potions[4].name+"</th><th>"+me.inventory.potions[5].name+"</th></tr></thead><tbody><tr><td><button class='btn btn-dark' onclick='GameManager.usePotion(me.inventory.potions[0])'>"+me.inventory.potions[0].number+"</button></td><td><button class='btn btn-dark' onclick='GameManager.usePotion(me.inventory.potions[1])'>"+me.inventory.potions[1].number+"</button></td><td><button class='btn btn-dark' onclick='GameManager.usePotion(me.inventory.potions[2])'>"+me.inventory.potions[2].number+"</button></td><td><button class='btn btn-dark' onclick='GameManager.usePotion(me.inventory.potions[3])'>"+me.inventory.potions[3].number+"</button></td><td><button class='btn btn-dark' onclick='GameManager.usePotion(me.inventory.potions[4])'>"+me.inventory.potions[4].number+"</button></td><td><button class='btn btn-dark' onclick='GameManager.usePotion(me.inventory.potions[5])'>"+me.inventory.potions[5].number+"</button></td></tr></tbody></table></div>"
    return text;
  },

  usePotion : function(potion){
    if (potion.number == 0) {
      console.log("No potion");
      alert("You do not have any " + potion.name + "!");
    } else {
      console.log("Potion is being used");
      me.useItem(potion);
      this.clear();
      this.inventory();
    }
  },

  weaponInfo : function(item) {
    let min = item.minDamage();
    let max = item.maxDamage();
    alert(item.name + ": Does " + min + " - " + max + " damage.");
  },

  armorInfo : function(item){
    alert(item.name + ": Increases your AC by " + item.ac + ".");
  },

  createItemsTable : function() {
    let text = "<div class='container'><table class='table table-dark table-hover'><thead><tr><th></th><th>Type</th><th>Name</th><th>Description</th></tr></thead> <tbody>";
    let rank = 1;
    let i = 0;
    for (item of me.inventory.items) {
      console.log(item.name);
      if (item instanceof Armor){
        type = "Armor"
      } else {
        type = "Weapon"
      }
      text = text + "<tr> <td> "+rank+". </td> <td>"+type+"</td> <td> <button class='btn btn-dark' onclick='GameManager.equip(me.inventory.items["+i+"])'> "+item.name+" </td> <td> "+item.description+" </td> </tr>"
      rank += 1;
      i += 1;
    }
    text = text + "</tbody></table></div>"
    return text
  },

  equip : function(item){
    if (item instanceof Armor) {
      me.equipArmor(item);
    } else {
      me.equipWeapon(item);
    }
    this.clear();
    this.inventory();
  },

  inventory : function() {
    this.clear();
    
    //me.inventory List
    this.start.innerHTML = "<h3 class='display-4'>Inventory Screen</h3><br><h5 class='display-5'>You have <span class='badge badge-warning'>"+me.inventory.gold+" gold coins</span>!<br><br>"+this.createPotionTable()+"  <h4 >Weapon Equipped: <button class='btn btn-secondary' onclick='GameManager.weaponInfo(me.equipped)'>"+me.equipped.name+"</button></h4><h4>Armor Equipped: <button class='btn btn-secondary' onclick='GameManager.armorInfo(me.armor)'>" + me.armor.name + "</button></h4>"+this.createItemsTable();

    // Back
    this.enemy.innerHTML = "<button onclick ='GameManager.goback()' class='btn btn-danger'>Back</button>";
  },

  goback : function() {
    this.stand.style.display = "none";
    this.standby();
    $("#standby").fadeToggle();
  },

  viewStats : function() {
    this.clear();
    let perc = 0
    let total = me.hit + me.miss;
    if (total != 0){
      perc = (me.hit / total) * 100;
      perc = Math.round(perc);
    }
    this.stand.style.display = "none";
    this.stand.innerHTML = "<div class='container' id='view'><h3 class='display-3'> " + me.name + "</h3><br> <h4>Level: <span class='badge badge-pill badge-primary'>" + me.level + "</span></h4><h4>XP: <span class='badge badge-pill badge-primary'>" + me.xp + " / " + me.cap + "</span></h4><h4>Endurance: <span class='badge badge-pill badge-dark'>"+ me.end + "</span></h4><h4>Strength: <span class='badge badge-pill badge-dark'>"+ me.str + "</span></h4><h4>Dexterity: <span class='badge badge-pill badge-dark'>"+ me.dext + "</span></h4><h4>Intelligence: <span class='badge badge-pill badge-dark'>"+ me.inte + "</span></h4><h4>AC Rating: <span class='badge badge-pill badge-light'>"+ me.ac + "</span></h4><h4>Equipped Weapon: <small>"+ me.equipped.name + "</small></h4><h4>Equipped Armor: <small>"+ me.armor.name + "</small></h4><br><h4>Wealth: <span class='badge badge-pill badge-warning'>"+ me.inventory.gold + " gold coins</span></h4><h4>Miles Travelled: <span class='badge badge-pill badge-secondary'>"+ me.traveled + "</span></h4><h4>Monsters Killed: <span class='badge badge-pill badge-danger'>"+ me.killed + "</span></h4><h4>Total Times Attacked: <span class='badge badge-pill badge-secondary'>"+ total + "</span></h4><h4>Total Hits: <span class='badge badge-pill badge-secondary'>"+ me.hit + "</span></h4><h4>Total Misses: <span class='badge badge-pill badge-secondary'>"+ me.miss + "</span></h4><h4>Hit Percentage: <span class='badge badge-pill badge-secondary'>"+ perc + "%</span></h4><h4>Spells Cast: <span class='badge badge-pill badge-secondary'>"+ me.spells + "</span></h4><br><br></div><button onclick ='GameManager.goback()' class='btn btn-danger'>Back</button>";
    $("#standby").fadeIn(1500);
  },

  levelUp : function() {
    console.log("STarting")
    this.clear();
    let a = me.maxHp;
    let b = me.maxMp;
    me.level = me.level + 1;
    var audio = new Audio('Sounds/QuestCompleted.wav');
    audio.play();
    let unlock = me.levelUp();
    me.maxMp += 10;
    me.maxHp += 15;
    me.mp = me.maxMp;
    me.hp = me.maxHp;
    me.xp = (me.xp - me.cap);
    cap = (me.level * 100) / 2;
    console.log("XP: " + me.xp);
    let perc = (me.xp / me.cap) * 100;
    me.xpPerc = perc;
    newEnemy();
    battleTime = false;
    if (unlock === 'Nothing') {
      console.log("Nothing was unlocked");
      this.start.innerHTML = "<div class='container'><h2 class='display-2'>Congratulations!</h2><br><h4>You have leveled up from <span class='badge badge-secondary'>"+(me.level-1)+"</span> to <span class='badge badge-secondary'>"+(me.level)+"</span>!</h4><br><br><h4><span class='badge badge-danger'>"+a+" health</span> -> <span class='badge badge-danger'>"+me.maxHp+" health</span></h4><h4><span class='badge badge-info'>"+b+" mana</span> -> <span class='badge badge-info'>"+me.maxMp+" mana<span></h4><br><h4><span class='badge badge-pill badge-success'>Endurance</span>: "+(me.end - 1)+" -> "+me.end+"</h4><h4><span class='badge badge-pill badge-danger'>Strength</span>: "+(me.str - 1)+" -> "+me.str+"</h4><h4><span class='badge badge-pill badge-warning'>Dexterity</span>: "+(me.dext - 1)+" -> "+me.dext+"</h4><h4><span class='badge badge-pill badge-primary'>Intelligence</span>: "+(me.inte - 1)+" -> "+me.inte+"</h4><br><button class='btn btn-dark' onclick='GameManager.goback()'>Continue</button></div>";
    }
     else {
      this.start.innerHTML = "<div class='container'><h2 class='display-2'>Congratulations!</h2><br><h4>You have leveled up from <span class='badge badge-secondary'>"+(me.level-1)+"</span> to <span class='badge badge-secondary'>"+(me.level)+"</span>!</h4><h4>You unlocked "+unlock.name+"!</h4><h4>"+unlock.description+"</h4><br><br><h4><span class='badge badge-danger'>"+a+" health</span> -> <span class='badge badge-danger'>"+me.maxHp+" health</span></h4><h4><span class='badge badge-info'>"+b+" mana</span> -> <span class='badge badge-info'>"+me.maxMp+" mana<span></h4><br><h4><span class='badge badge-pill badge-success'>Endurance</span>: "+(me.end - 1)+" -> "+me.end+"</h4><h4><span class='badge badge-pill badge-danger'>Strength</span>: "+(me.str - 1)+" -> "+me.str+"</h4><h4><span class='badge badge-pill badge-warning'>Dexterity</span>: "+(me.dext - 1)+" -> "+me.dext+"</h4><h4><span class='badge badge-pill badge-primary'>Intelligence</span>: "+(me.inte - 1)+" -> "+me.inte+"</h4><br><button class='btn btn-dark' onclick='GameManager.goback()'>Continue</button></div>";
    }
    console.log("finished leveling up");
  },

  findColor : function(name) {
    for (loc in allLocs){
      if (loc.name === name) {
        return loc.color;
      }
    }
  },

  map : function() {
    this.clear();
    this.start.innerHTML = "<table class='table table-dark table-striped'><thead><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><tbody><tr><td id='0'>"+visited[0][0]+"</td><td id='1'>"+visited[0][1]+"</td><td id='2'>"+visited[0][2]+"</td><td id='3'>"+visited[0][3]+"</td><td id='4'>"+visited[0][4]+"</td><td id='5'>"+visited[0][5]+"</td><td id='6'>"+visited[0][6]+"</td><td id='7'>"+visited[0][7]+"</td><td id='8'>"+visited[0][8]+"</td></tr><tr><td id='10'>"+visited[1][0]+"</td><td id='11'>"+visited[1][1]+"</td><td id='12'>"+visited[1][2]+"</td><td id='13'>"+visited[1][3]+"</td><td id='14'>"+visited[1][4]+"</td><td id='15'>"+visited[1][5]+"</td><td id='16'>"+visited[1][6]+"</td><td id='17'>"+visited[1][7]+"</td><td id='18'>"+visited[1][8]+"</td></tr><tr><td id='20'>"+visited[2][0]+"</td><td id='21'>"+visited[2][1]+"</td><td id='22'>"+visited[2][2]+"</td><td id='23'>"+visited[2][3]+"</td><td id='24'>"+visited[2][4]+"</td><td id='25'>"+visited[2][5]+"</td><td id='26'>"+visited[2][6]+"</td><td id='27'>"+visited[2][7]+"</td><td id='28'>"+visited[2][8]+"</td></tr><tr><td id='30'>"+visited[3][0]+"</td><td id='31'>"+visited[3][1]+"</td><td id='32'>"+visited[3][2]+"</td><td id='33'>"+visited[3][3]+"</td><td id='34'>"+visited[3][4]+"</td><td id='35'>"+visited[3][5]+"</td><td id='36'>"+visited[3][6]+"</td><td id='37'>"+visited[3][7]+"</td><td id='38'>"+visited[3][8]+"</td></tr><tr><td id='40'>"+visited[4][0]+"</td><td id='41'>"+visited[4][1]+"</td><td id='42'>"+visited[4][2]+"</td><td id='43'>"+visited[4][3]+"</td><td id='44'>"+visited[4][4]+"</td><td id='45'>"+visited[4][5]+"</td><td id='46'>"+visited[4][6]+"</td><td id='47'>"+visited[4][7]+"</td><td id='48'>"+visited[4][8]+"</td></tr><tr><td id='50'>"+visited[5][0]+"</td><td id='51'>"+visited[5][1]+"</td><td id='52'>"+visited[5][2]+"</td><td id='53'>"+visited[5][3]+"</td><td id='54'>"+visited[5][4]+"</td><td id='55'>"+visited[5][5]+"</td><td id='56'>"+visited[5][6]+"</td><td id='57'>"+visited[5][7]+"</td><td id='58'>"+visited[5][8]+"</td></tr><tr><td id='60'>"+visited[6][0]+"</td><td id='61'>"+visited[6][1]+"</td><td id='62'>"+visited[6][2]+"</td><td id='63'>"+visited[6][3]+"</td><td id='64'>"+visited[6][4]+"</td><td id='65'>"+visited[6][5]+"</td><td id='66'>"+visited[6][6]+"</td><td id='67'>"+visited[6][7]+"</td><td id='68'>"+visited[6][8]+"</td></tr><tr><td id='70'>"+visited[7][0]+"</td><td id='71'>"+visited[7][1]+"</td><td id='72'>"+visited[7][2]+"</td><td id='73'>"+visited[7][3]+"</td><td id='74'>"+visited[7][4]+"</td><td id='75'>"+visited[7][5]+"</td><td id='76'>"+visited[7][6]+"</td><td id='77'>"+visited[7][7]+"</td><td id='78'>"+visited[7][8]+"</td></tr><tr><td id='80'>"+visited[8][0]+"</td><td id='81'>"+visited[8][1]+"</td><td id='82'>"+visited[8][2]+"</td><td id='83'>"+visited[8][3]+"</td><td id='84'>"+visited[8][4]+"</td><td id='85'>"+visited[8][5]+"</td><td id='86'>"+visited[8][6]+"</td><td id='87'>"+visited[8][7]+"</td><td id='88'>"+visited[8][8]+"</td></tr><tr><td id='90'>"+visited[9][0]+"</td><td id='91'>"+visited[9][1]+"</td><td id='92'>"+visited[9][2]+"</td><td id='93'>"+visited[9][3]+"</td><td id='94'>"+visited[9][4]+"</td><td id='95'>"+visited[9][5]+"</td><td id='96'>"+visited[9][6]+"</td><td id='97'>"+visited[9][7]+"</td><td id='98'>"+visited[9][8]+"</td></tr><tr><td id='100'>"+visited[10][0]+"</td><td id='101'>"+visited[10][1]+"</td><td id='102'>"+visited[10][2]+"</td><td id='103'>"+visited[10][3]+"</td><td id='104'>"+visited[10][4]+"</td><td id='105'>"+visited[10][5]+"</td><td id='106'>"+visited[10][6]+"</td><td id='107'>"+visited[10][7]+"</td><td id='108'>"+visited[10][8]+"</td></tr><tr><td id='110'>"+visited[11][0]+"</td><td id='111'>"+visited[11][1]+"</td><td id='112'>"+visited[11][2]+"</td><td id='113'>"+visited[11][3]+"</td><td id='114'>"+visited[11][4]+"</td><td id='115'>"+visited[11][5]+"</td><td id='116'>"+visited[11][6]+"</td><td id='117'>"+visited[11][7]+"</td><td id='118'>"+visited[11][8]+"</td></tr></tbody></table>";
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
        } else if (x.innerHTML === 'Village' || x.innerHTML === 'City of Wall'){
          $('#'+i).css({'color':'GhostWhite', 'font-size':'1.25em'});
        } else {
          let color = this.findColor(x);
          $('#'+i).css('color', color);
        }
      }
    }
    $('#'+findSpot()).css({'border':'2px solid white', 'border-radius':'12px','background-color':'DarkSlateGrey', 'opacity':'0.5'});
    this.shop.innerHTML = "<button class='btn btn-dark' onclick='GameManager.goback()'>Back</button>";
  }
}

