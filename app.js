let form = document.querySelector("form");
let ul = document.querySelector(".myList");
let select = document.querySelector("#trans");

let obj = {
  moshina: 90,
  poyezd: 150,
  samalyot: 400,
  mototsikl: 70,
  velosiped: 40,
  piyoda: 10,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = document.querySelector("#inputText");
  let transport = select.value;
  let masofa = parseFloat(input.value);

  if (isNaN(masofa) || masofa <= 0 || transport === "") {
    alert("Iltimos, masofa kiriting va transport tanlang");
    return;
  }

  let tezlik = obj[transport];
  let vaqt = masofa / tezlik;
  let minut = (vaqt * 60) % 60;
  let sekund = (minut * 60) % 60;

  let li = document.createElement("li");
  li.textContent = `${transport} bilan ${masofa} km masofani ${parseInt(
    vaqt
  )} soat, ${parseInt(minut)} minut, ${parseInt(
    sekund
  )} sekundda bosib o'tasiz.`;
  ul.prepend(li);

  e.target.reset();
});

// forma qismi tugadi

