$(document).ready(onReady);


function onReady() {
  console.log("jquery loaded");
  $(`.attack-btn arcane-scepter`).on(`click`, arcaneScepter);
  $(`.attack-btn entangle`).on(`click`, entangle);
  $(`.attack-btn dragon-blade`).on(`click`, dragonBlade);
  $(`.attack-btn star-fire`).on(`click`, starFire);
}

function arcaneScepter(event) {
  event.preventDefault();
  console.log("Arcane scepter activated!");
}

function entangle(event) {
  event.preventDefault();
  console.log("Entangle activated!");
}

function dragonBlade(event) {
  event.preventDefault();
  console.log("Dragon Blade activated!");
}

function starFire(event) {
  event.preventDefault();
  console.log("Star Fire activated!");
}
