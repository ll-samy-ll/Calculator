document.getElementById(link).onclick = function () {
  alert("Attention lien mort");
  return false;
};

document.getElementById("link").addEventListener("click", function () {
  alert("Attention lien mort");
});
