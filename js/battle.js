// Battle object to control the battle interface

let Battle = {
  // Variables getting the DOM elements
  start : document.getElementById('start'),
  player : document.getElementById('player'),
  stand : document.getElementById('standby'),
  enemy : document.getElementById('enemy'),
  interactive : document.getElementById('interactive'),
  shop : document.getElementById('shop'),
  textbox : document.getElementById('textBox'),

  e : null,

  clear : function() {
    this.start.innerHTML = "";
    this.enemy.innerHTML = "";
    this.player.innerHTML = "";
    this.stand.innerHTML = "";
    this.interactive.innerHTML = "";
    this.shop.innerHTML = "";
  },

  playerInfo : function() {
    player.innerHTML = "<h6 title= 'Endurance: " + me.end + "\nStrength: " + me.str + "\nIntelligence: " + me.inte + "\nDexterity: " + me.dext + "\nAC Rating: " + me.ac + "'>Name: <small><span " + color2(2) + "> " + me.name + "</span></small></h6><h6>Level: <small> " + me.level + "</small></h6><div class='d-flex justify-content-center' style='padding:13px' title='XP: " + me.xp + " / " + me.cap + "'><div class='progress' style='width:20%'><div class='progress-bar bg-dark progress-bar-striped progress-bar-animated' style='width:"+ me.xpPerc + "% ' ></div></div></div><h6>Health: <small> <span " + color(me.hp, me.maxHp) + ">" + me.hp + " </span> / " + me.maxHp + "</small></h6><h6>Mana: <small><span " + color(me.mp, me.maxMp) + ">" + me.mp + "</span> / " + me.maxMp + "</small></h6><h6 title= '" + me.equipped.description + "'>Weapon: <small>" + me.equipped.name + "</small></h6><h6 title= '" + me.armor.description + "'>Armor: <small>" + me.armor.name + "</small></h6>";
  },

  toggleSpells : function() {
    let x = 0;
    for (n of playerSpells){
      if (n == 0) {
        $("#"+x).hide()
      }
      x += 1;
    }
  },

  toggleItems : function() {
    let x = 20;
    for (n of inventory.potions){
      if (n.number == 0){
        $('#' + x).toggle();
      }
      x += 1;
    }
  },

  createSpellButtons : function() {
    let text = "";
    let i = 0;
    for (spell of me.abilities){
      text = text + "<button title='"+ spell.description+"' id= '"+i+"' class='btn btn-info dropdown-item' onclick ='Combat.castSpell(me.abilities["+i+"])'>"+spell.name+"</button>";
      i += 1;
    }
    return text;
  },

  createItemButtons : function() {
    let text = "";
    let i = 0;
    for (potion of me.inventory.potions){
      if (potion.number > 0){
        text = text + "<button title='"+ potion.description+"' id= '"+(10 + i)+"' class='btn btn-info dropdown-item' onclick ='Combat.chooseItem(me.inventory.potions["+i+"])'>"+potion.name+"</button>"
      }
      i += 1;
    }
    return text;

  },

  interactiveInfo : function() {
    this.interactive.innerHTML = "<div class='btn-group'><button type='button' class='btn btn-dark' onclick='Combat.playerAttack()'>Attack</button><div class='btn-group'><button type='button' class='btn btn-dark dropdown-toggle' data-toggle='dropdown'>Magic</button><div class='btn btn-info dropdown-menu'>"+ Battle.createSpellButtons() +"</div></div><div class='btn-group'><button type='button' class='btn btn-dark dropdown-toggle' data-toggle='dropdown'>Items</button><div class='dropdown-menu'>"+ Battle.createItemButtons() + "</div><button class='btn btn-warning' title='Attempt to run away!' onclick='escape()'>Flee</button></div></div>";
  },

  textBoxStart : function() {
    this.textbox.innerHTML = "<br><div class = 'boxMan'><p id='startCombat'>-- Welcome to Combat! --</p></div><br>";
  },

  addText : function(text, cssClass){
    $( "#startCombat" ).prepend( '<p class = "boxText '+cssClass+'"> ' + text + ' </p>');
  },

  enemyInfo : function() {
    if (this.e.isSpellCaster() === true) {
      this.enemy.innerHTML = "<h4>Enemy</h4><h6 title=' " + this.e.description + "'>Name: <small><span " + color2(1) + "> " + this.e.name + "</span></small></h6><h6>Health: <small><span " + color(this.e.hp, this.e.maxHp) + ">" + this.e.hp + "</span> / " + this.e.maxHp + "</small></h6><h6>Mana: <small><span " + color(this.e.mp, this.e.maxMp) + ">" + this.e.mp + "</span> / " + this.e.maxMp + "</small></h6><h6 title='"+ this.e.equipped.description +"'>Weapon: <small>" + this.e.equipped.name + "</small></h6><h6 title='"+ this.e.armor.description + "'>Armor: <small>" + this.e.armor.name + "</small></h6>";
    } else {
      this.enemy.innerHTML = "<h3>Enemy</h3><h6 title=' " + this.e.description + "'>Name: <small><span " + color2(1) + "> "  + this.e.name + "</span></small></h6><h6>Health: <small><span " + color(this.e.hp, this.e.maxHp) + ">" + this.e.hp + "</span> / " + this.e.maxHp + "</small></h6><h6 title='"+ this.e.equipped.description +"'>Weapon: <small>" + this.e.equipped.name + "</small></h6><h6 title='"+ this.e.armor.description + "'>Armor: <small>" + this.e.armor.name + "</small></h6>";
    }
  },

  newBattle : function() {
    GameManager.clear();
    this.newEnemy();
    this.playerInfo();
    this.interactiveInfo();
    this.textBoxStart();
    this.enemyInfo();
  },

  battlePage : function() {
    this.clear()
    this.playerInfo();
    this.interactiveInfo();
    this.enemyInfo();
  },

  winScreen : function() {
    GameManager.clear()
    start.innerHTML = "<br><div class='container'><h4>Congratulations! You have defeated "+this.e.name+"!</h4><br><h5>You have gained <span class='badge badge-warning'>"+Combat.loot()+" gold coins<span>!</h5></div><br><button class='btn btn-dark' onclick='GameManager.goback()'>Back</button>"
  },

  newEnemy : function() {
    this.e = new Enemy('Rabid Dog', 'A crazed dog on the loose!', 15, 15, 0, 0, claws, fur, 40, [scratch]);
  }



} // End Battle Object