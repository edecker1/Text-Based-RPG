// Battle object to control the battle interface

let Battle = {
  // Variables getting the DOM elements
  start : document.getElementById('start'),
  player : document.getElementById('player'),
  stand : document.getElementById('standby'),
  enemys : document.getElementById('enemy'),
  interactive : document.getElementById('interactive'),
  shop : document.getElementById('shop'),
  textbox : document.getElementById('textBox'),

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
      text = text + "<button title='"+ spell.description+"' id= '"+i+"' class='btn btn-info dropdown-item' onclick ='Combat.cast(me.abilities["+i+"])'>"+spell.name+"</button>";
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

  enemyInfo : function(enemy) {
    if (enemy.mp > 0) {
      this.enemys.innerHTML = "<h4>Enemy</h4><h6 title=' " + enemy.description + "'>Name: <small><span " + color2(1) + "> " + enemy.name + "</span></small></h6><h6>Health: <small><span " + color(enemy.hp, enemy.maxHp) + ">" + enemy.hp + "</span> / " + enemy.maxHp + "</small></h6><h6>Mana: <small><span " + color(enemy.mp, enemy.maxMp) + ">" + enemy.mp + "</span> / " + enemy.maxMp + "</small></h6><h6 title='"+ enemy.equipped.description +"'>Weapon: <small>" + enemy.equipped.name + "</small></h6><h6 title='"+ enemy.armor.description + "'>Armor: <small>" + enemy.armor.name + "</small></h6>";
    } else {
      this.enemys.innerHTML = "<h3>Enemy</h3><h6 title=' " + enemy.description + "'>Name: <small><span " + color2(1) + "> "  + enemy.name + "</span></small></h6><h6>Health: <small><span " + color(enemy.hp, enemy.maxHp) + ">" + enemy.hp + "</span> / " + enemy.maxHp + "</small></h6><h6 title='"+ enemy.equipped.description +"'>Weapon: <small>" + enemy.equipped.name + "</small></h6><h6 title='"+ enemy.armor.description + "'>Armor: <small>" + enemy.armor.name + "</small></h6>";
    }
  },

  newBattle : function() {
    GameManager.clear();
    newEnemy();
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
    start.innerHTML = "<br><div class='container'><h4>Congratulations! You have defeated "+enemy.name+"!</h4><br><h5>You have gained <span class='badge badge-warning'>"+loot()+" gold coins<span>!</h5></div><br><button class='btn btn-dark' onclick='standBy()'>Back</button>"
  }



} // End Battle Object