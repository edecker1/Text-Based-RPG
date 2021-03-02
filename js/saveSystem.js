// Functions for saving and loading data //

// to save use:
// localStorage.setItem('user', JSON.stringify(user));
// to load use:
// var user = JSON.parse(localStorage.getItem('user'));
// to remove use:
//

var SaveSystem = {
  save1 : null,
  save2 : null,
  save3 : null,

  // Variables getting the DOM elements
  start : document.getElementById('start'),
  player : document.getElementById('player'),
  stand : document.getElementById('standby'),
  enemy : document.getElementById('enemy'),
  interactive : document.getElementById('interactive'),
  shop : document.getElementById('shop'),
  textbox : document.getElementById('textBox'),

  checkSaves : function(){
    if (localStorage.getItem("save1") === null) {
      console.log("No save found in Save One")
      this.save1 = {
        name: "None",
        level: "0"
      };
    } else {
      console.log("Save Found in 1")
      this.save1 = JSON.parse(localStorage.getItem('save1'));
    }

    if (localStorage.getItem("save2") === null) {
      console.log("No save found in Save Two")
      this.save2 = {
        name: "None",
        level: "0"
      };
    } else {
      console.log("Save Found in 2")
      this.save2 = JSON.parse(localStorage.getItem('save2'));
    }

    if (localStorage.getItem("save3") === null) {
      console.log("No save found in Save Three")
      this.save3 = {
        name: "None",
        level: "0"
      };
    } else {
      console.log("Save Found in 3")
      this.save3 = JSON.parse(localStorage.getItem('save3'));
    }
  },

  load : function(save){
    me = save;
    GameManager.standby();

  },

  save : function(saveSpot){
    console.log("Starting save")
    let saved = JSON.stringify(me);
    localStorage.setItem(saveSpot, saved);
    console.log("Save complete");
  },

  saveScreen : function() {
    GameManager.clear();
    let string1 = 'save1';
    let string2 = 'save2';
    let string3 = 'save3';
    this.start.innerHTML = "<div class='container'><br><h2 class='display-4'>Saving Progress</h2><br><button class='btn btn-light' onclick='SaveSystem.save('"+string1+"')'>Save One</button><button class='btn btn-light' onclick='SaveSystem.save('"+string2+"')'>Save Two</button><button class='btn btn-light' id='save3' onclick='SaveSystem.save('"+string3+"')'>Save Three</button></div><br><div class='container'><button class='btn btn-dark' id='back1' onclick='GameManager.standby()'>Back</button></div>";
  },

  loadScreen : function() {
    GameManager.clear();
    this.start.innerHTML = "<div id='load' class='container'><h2 class='display-4'>Load Hero</h2><div id='load1' class='container'><h3>Load #1<h3><h5>Name: <small>"+this.save1.name+"</small></h5><h5>Level: <small>"+this.save1.level+"</small></h5><button id='load1Btn' class='btn btn-dark'>Load</button></div><div id='load2' class='container'><h3>Load #2<h3><h5>Name: <small>"+this.save2.name+"</small></h5><h5>Level: <small>"+this.save2.level+"</small></h5><button id='load2Btn' class='btn btn-dark'>Load</button></div><div id='load3' class='container'><h3>Load #3<h3><h5>Name: <small>"+this.save3.name+"</small></h5><h5>Level: <small>"+this.save3.level+"</small></h5><button id='load3Btn' class='btn btn-dark'>Load</button></div></div>";
    $('#load1Btn').click(function(){
      this.load(this.save1);
    });
    $('#load2Btn').click(function(){
      this.load(this.save2);
    });
    $('#load3Btn').click(function(){
      this.load(this.save3);
    });
    let createHeroFlag = 0;
    if (this.save1.level == 0){
      $('#load1Btn').toggle();
      $('#load').after("<br><br><button onclick='GameManager.createHero()' class='btn btn-dark'>Back</button>");
      createHeroFlag = 1;

    }

    if (this.save2.level == 0){
      $('#load2Btn').toggle();
      if (createHeroFlag = 0) {
        $('#load').after("<br><br><button onclick='GameManager.createHero()' class='btn btn-dark'>Back</button>");
        createHeroFlag = 1;
      }
    }

    if (this.save3.level == 0){
      $('#load3Btn').toggle();
      if (createHeroFlag= 0) {
        $('#load').after("<br><br><button onclick='GameManager.createHero()' class='btn btn-dark'>Back</button>");
        gcreateHeroFlag = 1;
      }
    }

  }




}

