const inp_password = document.getElementById("inp_password");
const dogImg = document.getElementById("dogImg");

img1 = "1386055-dessin-animaux-visage-collection-gratuit-vectoriel.png";
img2 = "1386055-dessin-animaux-visage-collection-gratuit-vectoriel copie.png";

inp_password.addEventListener("input", () => {
  if (inp_password.value) {
    dogImg.src = img2;
  } else {
    dogImg.src = img1;
  }
});
