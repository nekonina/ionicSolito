const nameIn = document.querySelector("#pepe");
const cost = document.querySelector("#costo");
const btnIn = document.querySelector("#in");
const btnCancel = document.querySelector("#cancel");
const lista = document.querySelector("#listaCosas");
const tot = document.querySelector("#total");
const alerta = document.querySelector("ion-alert-controller");
let total = 0;

const clear = () => {
  nameIn.value = "";
  cost.value = "";
};

btnIn.addEventListener("click", () => {
  const nameinValue = nameIn.value;
  const costinValue = cost.value;

  if (
    costinValue < 0 ||
    nameinValue.trim().length < 1 ||
    costinValue.trim().length < 1
  ) {
    alerta
      .create({
        header: "valores invalidos",
        message: "costo debe ser >= a 0",
        buttons: ["okay"]
      })
      .then(alertElem => {
        alertElem.present();
      });
    return;
  }
  console.log(nameinValue, costinValue);
  const newItem = document.createElement("ion-item");
  newItem.textContent = nameinValue + ": $ " + costinValue;
  lista.appendChild(newItem);

  total += +costinValue;
  tot.textContent = total;
  clear();
});
btnCancel.addEventListener("click", clear);
