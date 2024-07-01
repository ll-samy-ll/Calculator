function convertir() {
  const fcfaAmout = parseFloat(document.getElementById("fcfaAmout").value);
  const amount_Dollard = parseFloat(fcfaAmout / 550);
  const amount_Euro = parseFloat(fcfaAmout / 650);

  document.getElementById("dollarAmount").innerHTML = amount_Dollard + " $";
  document.getElementById("euroAmount").innerHTML = amount_Euro + " £";
}
