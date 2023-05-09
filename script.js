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
  console.log("Attack Points:", attackPoints);
  console.log("Health Points:", healthPoints);
  $("#ap-meter.value").val(attackPoints);
  $("#hp-meter.value").val(healthPoints);
}

function entangle(event) {
  event.preventDefault();
  console.log("Entangle activated!");
  attackPoints -= 23;
  healthPoints -= 9;
  console.log("Attack Points:", attackPoints);
  console.log("Health Points:", healthPoints);
  $("#ap-meter.value").val(attackPoints);
  $("#hp-meter.value").val(healthPoints);
}

function dragonBlade(event) {
  event.preventDefault();
  console.log("Dragon Blade activated!");
  attackPoints -= 38;
  healthPoints -= 47;
  console.log("Attack Points:", attackPoints);
  console.log("Health Points:", healthPoints);
  $("#ap-meter.value").val(attackPoints);
  $("#hp-meter.value").val(healthPoints);
}

function starFire(event) {
  event.preventDefault();
  console.log("Star Fire activated!");
  attackPoints -= 33;
  healthPoints -= 25;
  console.log("Attack Points:", attackPoints);
  console.log("Health Points:", healthPoints);
  $("#ap-meter.value").val(attackPoints);
  $("#hp-meter.value").val(healthPoints);
}
