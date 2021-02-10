// SHOP FUNCTIONS //

// VILLAGE SHOPS // 
class Shop {
  constructor(name, intro, items) {
    this.name = name;
    this.intro = intro;
    this.items = items;
  }
}

function shop() {
  clear();
  let getShop = document.getElementById('shop');
  let getStand = document.getElementById('standby');
  getStand.innerHTML = "<h3 class='display-2'>Welcome to the Market!</h3><h4>Where Would You Like to Go?</h4><br><div class='btn-group'><div class='btn-group'><button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown'>Shops</button><div class='dropdown-menu'><a class='dropdown-item' onclick='weapons()'>Weaponsmith</a><a class='dropdown-item' onclick='armor()'>Armorsmith</a><a class='dropdown-item' onclick='buyGoods()'>General Goods</a></div><button type='button' class='btn btn-secondary' onclick='innKeeper()'>Inn</button><button type='button' class='btn btn-secondary' onclick='alley()'>Dark Alley</button></div></div><br><br><div id='shop'></div>";
  getShop.innerHTML = "<br><br><button class='btn btn-danger' onclick='standBy()'>Back</button>";
}

// Different Shops

// Getting used to arrow notation
let weapons = () => {
  clear();
  let getShop = document.getElementById('standby');
  getShop.innerHTML = "<h2 class='display-4'>Welcome to the Weapon Shop!</h2><br><h4>What can I get for you today?</h4><br><br><div class='btn-group'><button class='btn btn-dark' onclick='buyWeapons()'>Buy</button><button class='btn btn-light' onclick = 'sell()'>Sell</button></div><button class='btn btn-danger' onclick='shop()'>Back</button> <br>";

}

let armor = () => {
  clear();
  let getShop = document.getElementById('standby');
  getShop.innerHTML = "<h2 class='display-4'>Welcome to the Armor Shop!</h2><br><h4>What can I get for you today?</h4><br><br><div class='btn-group'><button class='btn btn-dark' onclick='buyArmor()'>Buy</button><button class='btn btn-light' onclick = 'sell()'>Sell</button></div><button class='btn btn-danger' onclick='shop()'>Back</button> <br>";

}

let generalGoods = () => {
  clear();
  let getShop = document.getElementById('standby');
  getShop.innerHTML = "<h2 class='display-4'>Welcome to the General Goods Shop!</h2><br><h4>What can I get for you today?</h4><br><br><div class='btn-group'><button class='btn btn-dark' onclick='buyGoods()'>Buy</button><button class='btn btn-light' onclick = 'sell()'>Sell</button></div><button class='btn btn-danger' onclick='shop()'>Back</button> <br>";
}
let getValues = (id) => {
  let number = document.getElementById(id).value;
  return number;
}

let buyWeaponsCheckout = () => {
  console.log('Running...')
  let a = getValues('dagger');
  console.log(a)
  let b = getValues('sword');
  console.log(b);
  let c = getValues('axe');
  console.log(c);
  let d = getValues('hammer');
  console.log(d);
  let e = getValues('bow');
  console.log(e);

  let quant = [a, b, c, d, e];
  let i = -1;

  for (value of quant){
    i = i + 1;
    console.log(i + " is i");
    if (value > 0){
      inventory.buy(shopWeap[i], value);
      console.log("Bought " + value + " " + shopWeap[i].name);
    } else {
      console.log("None bought")
    }
  }
  buyWeapons();

  console.log('Finished..');
}

let buyArmorCheckout = () => {
  console.log('Running...')
  let a = getValues('cloth');
  console.log(a)
  let b = getValues('leather');
  console.log(b);
  let c = getValues('mail');
  console.log(c);

  let quant = [a, b, c];
  let i = -1;

  for (value of quant){
    i = i + 1;
    console.log(i + " is i");
    if (value > 0){
      inventory.buy(shopArm[i], value);
      console.log("Bought " + value + " " + shopArm[i].name);
    } else {
      console.log("None bought")
    }
  }
  buyArmor();

  console.log('Finished..');

}
let buyWeapons = () => {
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5>'Take a look around my wares!'</h5> <br> <h6>You have " + inventory.gold + " gold coins</h6><br><label for='number' title='Costs " + getCost(dagger) + " gold coins'>Dagger:  </label><input id='dagger' type='number' min='0' max='99' name='quantity' value='0'><br><label for='number' title='Costs " + getCost(sword) + " gold coins'>Iron Sword:  </label><input id='sword' type='number' min='0' max='99' name='quantity' value='0'> <br><label for='number' title='Costs " + getCost(axe) + " gold coins'>Axe:  </label><input id='axe' type='number' min='0' max='99' name='quantity' value='0'><br><label for='number' title='Costs " + getCost(hammer) + " gold coins'>Hammer:  </label><input id='hammer' type='number' min='0' max='99' name='quantity' value='0'> <br><label for='number' title='Costs " + getCost(bow) + " gold coins'>Longbow:  </label><input id='bow' type='number' min='0' max='99' name='quantity' value='0'> <br><button class='btn btn-dark' onclick='buyWeaponsCheckout()'>Submit</button></form>";
}

let buyArmor = () => {
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5>'Take a look around my wares!'</h5> <br> <h6>You have " + inventory.gold + " gold coins</h6><br><label for='number' title='Costs " + getCost(clothArmor) + " gold coins'>Cloth Armor:  </label><input id='cloth' type='number' min='0' max='99' name='quantity' value='0'><br><label for='number' title='Costs " + getCost(leatherArmor) + " gold coins'>Leather Armor:  </label><input id='leather' type='number' min='0' max='99' name='quantity' value='0'> <br><label for='number' title='Costs " + getCost(mailArmor) + " gold coins'>Mail Armor:  </label><input id='mail' type='number' min='0' max='99' name='quantity' value='0'><br><br><button class='btn btn-dark' onclick='buyArmorCheckout()'>Submit</button></form>";
}

let buyGoods = () => {
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5>'Take a look around my wares!'</h5> <br> <h6>You have " + inventory.gold + " gold coins</h6><br><label for='number' title='Costs " + getCost(rests) + " gold coins'>Camp Supplies:  </label><input id='rest' type='number' min='0' max='99' name='quantity' value='0'><br><br><button class='btn btn-dark' onclick='buyGoodsCheckout()'>Submit</button></form>";

}

let buyGoodsCheckout = () => {
  console.log('Running...')
  let a = getValues('rest');

  if (a > 0){
    cost = (a * getCost(rests));
    if (cost > inventory.gold){
      alert("You do not have enough gold!");
    }
    else {
      inventory.gold = inventory.gold - cost;
      while (a > 0){
        me.camps += 1;
        a -= 1
      }
    }
  }

  buyGoods();

}
let sell = () => {
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5 id='sellMenu'>What do you wish to sell?<h5>";
  let a = 0;
  for (i = 0; i < inventory.items.length; i++){
    let x = inventory.items[i];
    console.log(x)
    $('#sellMenu').append("<br><button id='"+a+"'class='btn btn-secondary' title= 'Worth " + x.value + " gold coins'>" + x.name + "</button><br>")
    $('#'+a).click(function() {
      if (x.number == 1){
        sellItem(x)
        $(this).toggle();
      } else {
        sellItem(x);
      }
    });
    a += 1;

  }
}

let innKeeper = () => {
  let getShop = document.getElementById('shop');
  let x = 1;
  getShop.innerHTML = "<h5>'Why, hello! What Can I do for you?'</h5> <br> <h6>You have " + inventory.gold + " gold coins</h6><br> <button class='btn btn-dark' id='buyInfo' onclick='buyInfo("+x+")'>Rumors?</button><br> <button class='btn btn-dark' id='stayNight' onclick='stayNight()'>Stay the Night</button>";
}

let alley = () => {
  let x = 'alley'
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5>'Who are you?'</h5> <br> <h6>You have " + inventory.gold + " gold coins</h6><br> <button class='btn btn-dark' id='buyInfo' onclick='buyInfo("+x+")'>Rumors?</button><br>";
}

let stayNight = () => {
  let c = 0
  let x = findLocName();
  console.log(x);
  if (x === 'Village') {
    c = 35;
  } else {
    c = 55;
  }

  if (inventory.gold < c) {
    alert('You do not have enough gold!');
  } else {
    alert("You have stayed the night! It cost " + c + " gold coins!");
    inventory.gold -= c;
    me.hp = me.maxHp;
    me.mp = me.maxMp;
    innKeeper();

  }
}

let rumors = [
  "There's a powerful Lich to the northwest... It's said he is surrounded by hundreds of undead minions!",
  "I've heard reports of the Bandit King residing near the City of Wall...",
  "I've been told that the Elves and Fairies have been claiming more of the forest to the South West...",
  "There's been reports of a trade caravan being attacked to the south by Goblins!",
  "I haven't really heard anything lately...",
  "You see that woman over there? I hear she has at least twelve children!",
  "It's a dangerous time to be an adventurer! Come stay the night and rest up to fully heal!",
  "I cannot believe Christmas is so close by! I hear they are giving big discounts soon for the Holiday season!",
  "My beer is the most nutritious drink out there! Come get some!",
  "I wish I was alive to see the great adventures of Jake Fontanez, the dragon slayer! I've heard incredible things about his beauty!",
  "The strongest man in the Kingdom came by the other day! The Knight Stephon Rosario! His biceps were huge!",
  "Lord Andrew Persson stayed at my inn the other night! Brought me a lot of business!",
  "I really hate those Goblins, always attacking my caravans!",
  "How many times can I serve this man? How is he not too drunk to stand yet?!",
  "Don't believe the rumors taht my beds have bed bugs in them! That's only true for two of them.",
  "Them spirits are scary. So hard to land a blow on them...",
  "Maybe one day you'll be as rich as me!",
  "This man Brendan Murphy might be the greatest bard I've ever seen!",
  "My favorite quote be 'You're not you anymore'"
]

let rumors2 = [
  "There's a powerful Lich to the northwest... He is much too powerful!",
  "Our Lord, the Bandit King, resides by the City of Wall. Fight him if you dare.",
  "Those Elves and Fairies have been taking over more and more of the forest!",
  "It seems the Goblins have a home base in the south... just the the west of Wall.",
  "The City of Wall south of here has much better gear for sale! OF course for more expensive!",
  "The Orcs have a stronghold near here...",
  "That innkeeper will let you heal up for a price.",
  "You will always sell items at a lower cost than when you purchase them!",
  "There's a wizard tower to the south that may offer you additional spells if they find you worthy...",
  "If you need more potions, there is an alchemist in Wall.",
  "There's a gang to the south, much more than just a lad like me."
]
let buyInfo = (loc) => {
  if (loc == 1){
    let x = Math.floor(Math.random() * rumors.length);
    let c = 5;
    if (inventory.gold < c){
      alert("You do not have enough gold!");
      return;
    } else {
      inventory.gold -= c;
      $('#shop').after("<div class='alert alert-secondary alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>You pay the innkeeper " + c + " gold coins, and he whispers to you in return: </strong>" + rumors[x]+"</div>")
      innKeeper();
    }
  } else {
    let x = Math.floor(Math.random() * rumors2.length);
    let c = 15;
    if (inventory.gold < c){
      alert("You do not have enough gold!");
      return;
    } else {
      inventory.gold -= c;
      $('#shop').after("<div class='alert alert-secondary alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>You pay the shady man " + c + " gold coins, and he whispers to you in return: </strong>" + rumors2[x]+"</div>")
      alley();
    }

  }
}

// CITY SHOPPING //
// LETS MAKE THESE ONES FANCIER WITH JQUERY //
let cityShop = () => {
  clear();

  document.getElementById("standby").style.display = "none";
  let getShop = document.getElementById('shop');
  let getStand = document.getElementById('standby');
  getStand.innerHTML = "<h3 class='display-2'>Welcome to the Bazaar!</h3><h4>Where Would You Like to Go?</h4><br><div class='btn-group'><div class='btn-group'><button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown'>Shops</button><div class='dropdown-menu'><a class='dropdown-item' onclick='cityWeapons()'>Master WeaponSmith</a><a class='dropdown-item' onclick='cityArmors()'>Master Armorsmith</a><a class='dropdown-item' onclick='cityAlchemist()'>Alchemist</a></div><button type='button' class='btn btn-secondary' onclick='innKeeper()'>Inn</button><button type='button' class='btn btn-secondary' onclick='cityGang()'>Dark Alley</button><button type='button' class='btn btn-secondary' onclick='wizardTower()'>Wizard Tower</button></div></div><br><br><div id='shop'></div>";
  getShop.innerHTML = "<br><br><button class='btn btn-danger' onclick='standBy()'>Back</button>";
  $("#standby").fadeIn(1500);
  $("#shop").fadeIn(1500);
}

let cityWeapons = () => {
  clear();
  let getShop = document.getElementById('standby');
  getShop.innerHTML = "<h2 class='display-4'>You are in the presence of a Master Weaponsmith!</h2><br><h4>'What do you want?'</h4><br><br><div class='btn-group'><button class='btn btn-dark' onclick='cityBuyWeapons()'>Buy</button><button class='btn btn-light' onclick = 'sell()'>Sell</button></div><button class='btn btn-danger' onclick='cityShop()'>Back</button> <br>";
}

let cityBuyWeapons = () => {
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5>'Take a look at my masterpieces! Don't touch!'</h5> <br> <h6>You have <span class='badge badge-warning'>" + inventory.gold + " gold coins</span></h6><br><label for='number' title='Costs " + getCost(darkStaff) + " gold coins'>Dark Staff:  </label><input id='darkStaff' type='number' min='0' max='99' name='quantity' value='0'><br><label for='number' title='Costs " + getCost(battleAxe) + " gold coins'>Battle Axe:  </label><input id='battleAxe' type='number' min='0' max='99' name='quantity' value='0'> <br><label for='number' title='Costs " + getCost(curvedDagger) + " gold coins'>Curved Dagger:  </label><input id='curvedDagger' type='number' min='0' max='99' name='quantity' value='0'><br><label for='number' title='Costs " + getCost(shortBow) + " gold coins'>Short Bow:  </label><input id='shortBow' type='number' min='0' max='99' name='quantity' value='0'> <br><br><button class='btn btn-dark' onclick='cityBuyWeaponsCheckout()'>Check Out</button></form>";
}

let cityAlchemist = () => {
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5>'Please do not touch or sniff anything! Especially sniff!'</h5> <br> <h6>You have <span class='badge badge-pill-warning'>" + inventory.gold + " gold coins</span></h6><br><label for='number' title='Costs " + getCost(health1) + " gold coins'>Minor Health Potion: </label><input id='health1' type='number' min='0' max='99' name='quantity' value='0'><label for='number' title='Costs " + getCost(health2) + " gold coins'>Health Potion: </label><input id='health2' type='number' min='0' max='99' name='quantity' value='0'><label for='number' title='Costs " + getCost(health3) + " gold coins'>Major Health Potion: </label><input id='health3' type='number' min='0' max='99' name='quantity' value='0'><label for='number' title='Costs " + getCost(mana1) + " gold coins'>Minor Mana Potion: </label><input id='mana1' type='number' min='0' max='99' name='quantity' value='0'><label for='number' title='Costs " + getCost(mana2) + " gold coins'>Mana Potion: </label><input id='mana2' type='number' min='0' max='99' name='quantity' value='0'><label for='number' title='Costs " + getCost(mana3) + " gold coins'>Major Mana Potion: </label><input id='mana3' type='number' min='0' max='99' name='quantity' value='0'><br><br><button class='btn btn-dark' onclick='cityBuyAlchemist()'>Submit</button></form>";

}

let cityBuyAlchemist = () => {
  console.log('Running...')
  let a = getValues('health1');
  console.log(a)
  let b = getValues('health2');
  console.log(b);
  let c = getValues('health3');
  console.log(c);
  let d = getValues('mana1');
  console.log(d);
  let e = getValues('mana2');
  console.log(e);
  let f = getValues('mana3');
  console.log(f);

  let quant = [a, b, c, d, e, f];
  let i = -1;

  for (value of quant){
    i += 1;
    console.log(i + " is i");
    if (value > 0){
      let z = getCost(inventory.potions[i])
      if (inventory.gold >= z){
        inventory.plusPotion
        inventory.gold -= z
        console.log("Bought " + value + " " + inventory.potions[i].name);
      } else {
        alert("You don't have enough money!")
      }
    } else {
      console.log("None bought")
    }
  }
  cityAlchemist();

  console.log('Finished..');

}

let cityBuyWeaponsCheckout = () => {
  console.log('Running...')
  let a = getValues('darkStaff');
  console.log(a)
  let b = getValues('battleAxe');
  console.log(b);
  let c = getValues('curvedDagger');
  console.log(c);
  let d = getValues('shortBow');
  console.log(d);

  let quant = [a, b, c, d];
  let i = -1;

  for (value of quant){
    i = i + 1;
    console.log(i + " is i");
    if (value > 0){
      inventory.buy(cityWeap[i], value);
      console.log("Bought " + value + " " + cityWeap[i].name);
    } else {
      console.log("None bought")
    }
  }
  cityBuyWeapons();

  console.log('Finished..');
}

let cityArmors = () => {
  clear();
  let getShop = document.getElementById('standby');
  getShop.innerHTML = "<h2 class='display-4'>You are in the presence of a Master Armorsmith!</h2><br><h4>'What do you need? Spit it out! I'm busy!</h4><br><br><div class='btn-group'><button class='btn btn-dark' onclick='cityBuyArmor()'>Buy</button><button class='btn btn-light' onclick = 'sell()'>Sell</button></div><button class='btn btn-danger' onclick='cityShop()'>Back</button> <br>";

}

let cityBuyArmor = () => {
  let getShop = document.getElementById('shop');
  getShop.innerHTML = "<h5>'Take a look but don't touch unless you've given me gold!'</h5> <br> <h6>You have <span class='badge badge-warning'>" + inventory.gold + " gold coins</span></h6><br><label for='number' title='Costs " + getCost(darkRobes) + " gold coins'>Dark Robes: </label><input id='darkRobes' type='number' min='0' max='99' name='quantity' value='0'><br><label for='number' title='Costs " + getCost(elfArmor) + " gold coins'>Elf Armor:  </label><input id='elfArmor' type='number' min='0' max='99' name='quantity' value='0'> <br><label for='number' title='Costs " + getCost(dwarf) + " gold coins'>Dwarven Armor:  </label><input id='dwarf' type='number' min='0' max='99' name='quantity' value='0'><br><label for='number' title='Costs " + getCost(dragon) + " gold coins'>Dragonscale Armor:  </label><input id='dragon' type='number' min='0' max='99' name='quantity' value='0'><br><br><button class='btn btn-dark' onclick='cityBuyArmorCheckout()'>Submit</button></form>";
}

let cityBuyArmorCheckout = () => {
  console.log('Running...')
  let a = getValues('darkRobes');
  console.log(a)
  let b = getValues('elfArmor');
  console.log(b);
  let c = getValues('dwarf');
  console.log(c);
  let d = getValues('dragon');
  console.log(d);

  let quant = [a, b, c, d];
  let i = -1;

  for (value of quant){
    i = i + 1;
    console.log(i + " is i");
    if (value > 0){
      inventory.buy(cityArmor[i], value);
      console.log("Bought " + value + " " + cityArmor[i].name);
    } else {
      console.log("None bought")
    }
  }
  cityBuyArmor();

  console.log('Finished..');

}

let wizardTower = () => {
  clear();
  document.getElementById("shop").style.display = "none";
  document.getElementById("standby").style.display = "none";
  let getShop = document.getElementById('shop');
  let getStand = document.getElementById('standby');
  if (me.level < 10){
    getStand.innerHTML = "<h3 class='display-2'>Welcome to the Wizard Tower!</h3><br><br><div class='container'><h3>The Head Wizard looks you up and down.</h3><h2>'You are not worthy to even speak to me, child. Please leave.'</h2><h3>The Head Wizard leaves you alone.</h3>";
  } else {
    getStand.innerHTML = "<h3 class='display-2'>Welcome to the Wizard Tower!</h3><br><br><div class='container'><h3>The Head Wizard looks you up and down.</h3><h2>'I see you have grown in power...'</h2><h3>The Head Wizard beckons you forward.</h3>";
  }
  getShop.innerHTML = "<br><br><button class='btn btn-danger' onclick='cityShop()'>Back</button>";
  $("#standby").fadeIn(1500);
  $("#shop").fadeIn(1500);
}

let cityGang = () => {
  clear();
  document.getElementById("shop").style.display = "none";
  document.getElementById("standby").style.display = "none";
  let getShop = document.getElementById('shop');
  let getStand = document.getElementById('standby');
  getStand.innerHTML = "<div id='gang' class='container'><h3 class='display-3'>Dark Alley</h3><br><h4>A dark man cloaked in shadows walks up to you</h4><h4>'You'll leave if you know whats good for ya!'</h4><br><br><button class='btn btn-dark'>'Watch who you're speaking to!'</button><button class='btn btn-dark'>'Who do you work for?'</button></div>";
  getShop.innerHTML = "<br><br><button class='btn btn-danger' onclick='cityShop()'>Back</button>";
  $("#standby").fadeIn(1500);
  $("#shop").fadeIn(1500);
}

let situations = (s) => {
  let getStand = document.getElementById('standby');
  if (s == 1){
    getStand.innerHTML = "<div id='gang' class='container'><h3 class='display-3'>Dark Alley</h3><br><h4>The man is visibly angered by your lack of respect</h4><h4>'You'll leave if you know whats good for ya!'</h4><br><br><button class='btn btn-dark'>'Watch who you're speaking to!'</button><button class='btn btn-dark'>'Who do you work for?'</button></div>";
  } else if (s == 2){
    //second
  }
} 