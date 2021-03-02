// this class will have the shop items
class Shop {
  constructor(name, shopOwner, intro, items) {
    this.name = name;
    this.shopOwner = shopOwner;
    this.intro = intro;
    this.items = items;
  }
}
// Shops
var weaponStore = new Shop("Weapon Store", "Nhan the Nimble", "'Welcome to my shop! I am the strongest weapon creator in the land!'", [dagger, sword, axe, hammer, bow]);
var armorStore = new Shop("Armor Shop", "Timmy the Tanky", "'You lookin' for some armor? You came to the right place!", [clothArmor, leatherArmor, mailArmor]);
var alchemist = new Shop("Apprentice Alchemist", "Manny the Curious", "'Welcome to my shop! I don't have much, but I got some potions!", [health1, health2, mana1]);

var cityArmor = new Shop("Legendary Armor Shop", "Jake the Artisan", "'You got money? If you ain't got money, get out!'", [elfArmor, elfArmor2, dwarf, dragon]);
var cityWeapon = new Shop("Legendary Weapon Store", "Andrew the Dragonslayer", "'I got weapons ready to kill dragons! You got the coin for it?'", [darkStaff, battleAxe, curvedDagger, shortBow]);
var cityAlchemist = new Shop("Alchemy Store", "Jon the Crafty", "'Welcome to my shop! What drugs- I mean potions do you need?'", [health1, health2, health3, mana1, mana2, mana3]);

// This will control all of the stores
let StoreManager = {
  // Variables getting the DOM elements
  start : document.getElementById('start'),
  player : document.getElementById('player'),
  stand : document.getElementById('standby'),
  enemy : document.getElementById('enemy'),
  interactive : document.getElementById('interactive'),
  store : document.getElementById('shop'),
  textbox : document.getElementById('textBox'),
  
  // Store objects
  shopList : [weaponStore, armorStore, alchemist, cityArmor, cityWeapon, cityAlchemist],

  // Make table of stock
  itemsList : function(index){
    let store = this.shopList[index];
    let html = "<div class='container'><br><br><table class='table'><thead class='thead-dark'><tr><th>Name</th><th>Description</th><th>Cost</th><th></th></tr></thead><tbody>";
    for (let i = 0; i < store.items.length; i++) {
      console.log(store.items[i].name+ " is the name");
      let item = store.items[i];
      html += "<tr><td>"+item.name+"</td><td>"+item.description+"</td><td>"+item.cost()+" gold</td><td><input type='number' id='"+i+"' min='0' placeholder='0'></td></tr>";
    }
    html += "</tbody></table><br><button class='btn btn-dark' onclick=' StoreManager.buyItems("+index+")'>Buy Items</button></div>";
    return html;
  },

  // StoreFront
  storeFront : function(index){
    let store = this.shopList[index];
    console.log(store)
    GameManager.clear();
    this.stand.innerHTML = "<div class='container'><h3>Welcome to the "+store.name+"!</h3><br><h5>This store is owned by <i>"+store.shopOwner+"</i>.</h5><br><h4>"+store.intro+"</h4></div>";
    this.store.innerHTML = this.itemsList(index) + "<br><br><button class='btn btn-danger' onclick='GameManager.standby()'>Back</button>";
  },

  // This will buy all items if value over
  buyItems : function(index){
    let store = this.shopList[index];
    for (let i = 0; i < store.items.length; i++) {
      let item = store.items[i];
      var temp = $("#"+i).val();
      console.log(temp + " is temp")
      if (temp > 0){
        let x = temp;
        while (x > 0) {
          console.log("You have bought one " + item.name)
          me.buyItem(item, 1);
          x -= 1;
        }
      }
    }
  },

  weaponShop : function(){
    this.storeFront(0);
  },

  armorShop : function() {
    this.storeFront(1);
  },

  alchemy : function() {
    this.storeFront(2);
  },

  cityWeaponShop : function(){
    this.storeFront(4);
  },

  cityArmorShop : function() {
    this.storeFront(3);
  },

  cityAlchemy : function() {
    this.storeFront(5);
  },

  villageMarket : function(){
    GameManager.clear();
    this.stand.innerHTML = "<div class='container'><h3>Welcome to the Village Marketplace!</h3><br><h5>Where would you like to go?</h5><br></div>";
    this.store.innerHTML = "<div class='container'><div class='btn btn-group'><button class='btn btn-dark' onclick='StoreManager.weaponShop()'>Weapon Shop</button><button class='btn btn-dark' onclick='StoreManager.armorShop()'>Armor Shop</button><button class='btn btn-dark' onclick='StoreManager.alchemy()'>Apprentice Alchemist</button></div><br><br><button class='btn btn-danger' onclick='GameManager.standby()'>Back</button></div>";
  },

  cityMarket : function() {
    GameManager.clear();
    this.stand.innerHTML = "<div class='container'><h3>Welcome to the Village Marketplace!</h3><br><h5>Where would you like to go?</h5><br></div>";
    this.store.innerHTML = "<div class='container'><div class='btn btn-group'><button class='btn btn-dark' onclick='StoreManager.cityWeaponShop()'>Weapon Shop</button><button class='btn btn-dark' onclick='StoreManager.cityArmorShop()'>Armor Shop</button><button class='btn btn-dark' onclick='StoreManager.cityAlchemy()'>Apprentice Alchemist</button></div><br><br><button class='btn btn-danger' onclick='GameManager.standby()'>Back</button></div>";
  }

}



// -- BAD CODE MUST REWORK --- //

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