$(document).ready(onReady);

let attackPoints = 100;
let healthPoints = 100;

function onReady() {
  console.log("jquery loaded");
  $(`.arcane-scepter`).on(`click`, arcaneScepter);
  $(`.entangle`).on(`click`, entangle);
  $(`.dragon-blade`).on(`click`, dragonBlade);
  $(`.star-fire`).on(`click`, starFire);
}

function arcaneScepter(event) {
  event.preventDefault();
  console.log("Arcane scepter activated!");
  attackPoints -= 12;
  healthPoints -= 14;
  renderResult();
}

function entangle(event) {
  event.preventDefault();
  console.log("Entangle activated!");
  attackPoints -= 23;
  healthPoints -= 9;
  renderResult();
}

function dragonBlade(event) {
  //event.preventDefault();
  console.log("Dragon Blade activated!");
  attackPoints -= 38;
  healthPoints -= 47;
  renderResult();
}

function starFire(event) {
  event.preventDefault();
  console.log("Star Fire activated!");
  attackPoints -= 33;
  healthPoints -= 25;
  renderResult();
}

function renderResult() {
  if (healthPoints <= 0) {
    healthPoints = 0;
    $(".freaky-fungus").removeClass(".walk").addClass(".dead");
  }
  if (attackPoints <= 0) {
    attackPoints = 0;
    $(".freaky-fungus").removeClass(".walk").addClass(".jump");
  }
  console.log("Attack Points:", attackPoints);
  console.log("Health Points:", healthPoints);
  $("#ap-meter").val(attackPoints);
  $(".ap-text").text(attackPoints);
  $("#hp-meter").val(healthPoints);
  $(".hp-text").text(healthPoints);
}
