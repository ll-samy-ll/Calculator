input = document.getElementById("input");

if (input.value === "Infinity") {
  alert("WOWWWWWWWWWW");
}

//fonction pour réinitialiser l'espace de saisi
function reset() {
  input.value = "";
}

//fonction pour entrer des valeurs dans l'espace de saisi et dans un tableau lorsqu'on clique sur un bouton
function print(display) {
  input.value += display;
  let inputTab = [];
  inputTab.push(...input.value);
}
//fonction pour entrer les valeurs de l'espace de saisi dans un tableau quand on saisi au clavier dans l'espace de saisie
function inputInTable() {
  let inputTab = [...input.value];
}
//fonction pour effacer le dernier caractère dans l'espace de saisi
function erase() {
  let inputTab = [...input.value];
  let lastCaracter = inputTab.pop();
  input.value = inputTab.join("");
}
//fonction pour calculer le contenu qui est dans l'espace de saisi
function calculate() {
  input.value = eval(input.value);
}

//fonction pour que s'il on presse "entrée" la fonction calculate soit exécuté
function pressSpaceToCalculate(event) {
  //vérification si la touche "entrée" a été pressé
  if (event.code == "Enter") {
    calculate();
  }
}
//ajouter l'évenement "keyup" à l'objet window
window.addEventListener("keyup", pressSpaceToCalculate);

function pressBackspaceToErase(event) {
  if (event.code == "Backspace") {
    erase();
  }
}
window.addEventListener("keyup", pressBackspaceToErase);
