const meter = 3.281 //feet
const liter = 0.264 //gallon
const kilogram = 2.204 //pound

const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')
const btnEl = document.getElementById('convert-btn')
const inputEl = document.getElementById("input-val");

btnEl.addEventListener("click", () => {
    convert(inputEl.value)
})

function convert(val) {
  const feetVal = val * meter
  const gallonVal = val * liter
  const poundVal = val * kilogram
  const meterVal = val / meter
  const literVal = val / liter
  const kilogramVal = val / kilogram

  lengthEl.textContent = `${val} meters = ${feetVal.toFixed(3)} feet | ${val} feet = ${meterVal.toFixed(3)} meters`;
  volumeEl.textContent = `${val} liters = ${gallonVal.toFixed(3)} gallons | ${val} feet = ${literVal.toFixed(3)} liters`;
  massEl.textContent = `${val} kilos = ${poundVal.toFixed(3)} pounds | ${val} feet = ${kilogramVal.toFixed(3)} kilos`;

  inputEl.value = "";
}