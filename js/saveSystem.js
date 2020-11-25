// Functions for saving and loading data //

// to save use:
// localStorage.setItem('user', JSON.stringify(user));
// to load use:
// var user = JSON.parse(localStorage.getItem('user'));
// to remove use:
//
let save1, save2, save3;
let inv1, inv2, inv3;
let a= 0, b=0, c=0;
//localStorage.removeItem('save1')
// CHECK SAVES
if (localStorage.getItem("save1") === null) {
  console.log("No save found in Save One")
  save1 = {
    name: "None",
    level: "0"
  };
} else {
  console.log("Save Found in 1")
  a=1;
  save1 = JSON.parse(localStorage.getItem('save1'));
  inv1 = JSON.parse(localStorage.getItem('inv1'))
};

if (localStorage.getItem("save2") === null) {
  console.log("No save found in Save Two")
  save2 = {
    name: "None",
    level: "0"
  };
} else {
  console.log("Save Found in Two")
  b=1;
  save2 = JSON.parse(localStorage.getItem('save2'));
  inv2 = JSON.parse(localStorage.getItem('inv2'))
};

if (localStorage.getItem("save3") === null) {
  console.log("No save found in Save Three")
  save3 = {
    name: "None",
    level: "0"
  };
} else {
  console.log("Save Found in Three")
  c=1;
  save3 = JSON.parse(localStorage.getItem('save3'));
  inv3 = JSON.parse(localStorage.getItem('inv3'))
};

function load(save, save1) {
  me = save;
  inventory = save1;
  standBy();
}

function save(space, space1){
  let r = JSON.stringify(me);
  let s = JSON.stringify(inventory)
  localStorage.setItem(space, r);
  localStorage.setItem(space1, s);
  console.log("Save complete");
}
function saveScreen(){
  clear();
  let start = document.getElementById("start");
  start.innerHTML = "<div class='container'><h2 class='display-4'>Saving Progress</h2><button class='btn btn-light' id='save1'>Save One</button><button class='btn btn-light' id='save2'>Save Two</button><button class='btn btn-light' id='save3'>Save Three</button></div><div class='container'><button class='btn btn-dark' id='back1'>Back</button>";
  $('#back1').click(function(){
    standBy();
  });
  $('#save1').click(function(){
    save('save1', 'inv1');
  });
  $('#save2').click(function(){
    save('save2', 'inv2');
  });
  $('#save3').click(function(){
    save('save3', 'inv3');
  });
}

function loadScreen(){
  clear();
  let start = document.getElementById("start");
  start.innerHTML = "<div id='load' class='container'><h2 class='display-4'>Load Hero</h2><div id='load1' class='container'><h3>Load #1<h3><h5>Name: <small>"+save1.name+"</small></h5><h5>Level: <small>"+save1.level+"</small></h5><button id='load1Btn' class='btn btn-dark'>Load</button></div><div id='load2' class='container'><h3>Load #2<h3><h5>Name: <small>"+save2.name+"</small></h5><h5>Level: <small>"+save2.level+"</small></h5><button id='load2Btn' class='btn btn-dark'>Load</button></div><div id='load3' class='container'><h3>Load #3<h3><h5>Name: <small>"+save3.name+"</small></h5><h5>Level: <small>"+save3.level+"</small></h5><button id='load3Btn' class='btn btn-dark'>Load</button></div></div>";
  $('#load1Btn').click(function(){
    load(save1, inv1);
  });
  $('#load2Btn').click(function(){
    load(save2, inv2);
  });
  $('#load3Btn').click(function(){
    load(save3, inv3);
  });
  let g = 0;
  if (a == 0){
    $('#load1Btn').toggle();
    $('#load').after("<br><br><button onclick='createHero()' class='btn btn-dark'>Back</button>");
    g = 1;

  }

  if (b == 0){
    $('#load2Btn').toggle();
    if (g= 0) {
      $('#load').after("<br><br><button onclick='createHero()' class='btn btn-dark'>Back</button>");
      g = 1;
    }
  }

  if (c == 0){
    $('#load3Btn').toggle();
    if (g= 0) {
      $('#load').after("<br><br><button onclick='createHero()' class='btn btn-dark'>Back</button>");
      g = 1;
    }
  }
}