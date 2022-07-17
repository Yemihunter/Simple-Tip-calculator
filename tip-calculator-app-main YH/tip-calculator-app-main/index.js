// DOM linkes

const billInput = document.getElementById("bill-input");
const tipBtn = document.querySelectorAll(".tip-btn");
const tipCustom = document.querySelector(".tip-custom");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const reset1 = document.getElementById("reset1");

// Event listeners
billInput.addEventListener("input", inputMirrorTotal);
tipBtn.forEach((tipBtn) => tipBtn.addEventListener("click", tipCal));
tipCustom.addEventListener("input", tipCustomCal);
people.addEventListener("input", peopleCal);
reset1.addEventListener("click", clearAll);

// functions
function inputMirrorTotal() {
  var inputVal = billInput.value;
  var inputPerPerson = people.value || 1;
  var peopleErr = document.querySelector(".peopleErr");
  var billErr = document.querySelector(".billErr");
  totalAmount.innerText = `$${(inputVal / inputPerPerson).toFixed(2)}`;
  billErr.style.display = "none";
  billInput.classList.remove("err");
  reset1.disabled = false;
};

function tipCal(e) {
  var tipResult = (e.target.value / 100) * billInput.value;
  var inputPerPerson = people.value || 1;
  if (billInput.value && people.value) {
  tipAmount.innerText = `$${(tipResult / inputPerPerson).toFixed(2)}`;
  totalAmount.innerText = `$${(parseFloat(tipResult) + parseFloat(billInput.value) / inputPerPerson).toFixed(2)}`;
  tipCustom.value = "";
} else if (billInput.value && !people.value) {
  document.querySelector(".billErr").style.display = "none";
  document.querySelector(".peopleErr").style.display = "inline";
  billInput.classList.remove("err");
  people.classList.add("err");
  tipBtn.disabled = true;
} else if (people.value && !billInput.value) {
  document.querySelector(".peopleErr").style.display = "none";
  people.classList.remove("err");
} else {
  totalAmount.innerText = "$0.00";
  document.querySelector(".billErr").style.display = "inline";
  document.querySelector(".peopleErr").style.display = "inline";
  people.classList.add("err");
  billInput.classList.add("err");
  }
};

function tipCustomCal() {
  var tipResult = (tipCustom.value / 100) * billInput.value;
  var inputPerPerson = people.value || 1;
  if (billInput.value && people.value) {
  tipAmount.innerText = `$${(tipResult / inputPerPerson).toFixed(2)}`;
  totalAmount.innerText = `$${(parseFloat(tipResult) + parseFloat(billInput.value) / inputPerPerson).toFixed(2)}`;
} else if (billInput.value && !people.value) {
  document.querySelector(".billErr").style.display = "none";
  document.querySelector(".peopleErr").style.display = "inline";
  billInput.classList.remove("err");
  people.classList.add("err");
} else if (people.value && !billInput.value) {
  document.querySelector(".peopleErr").style.display = "none";
  people.classList.remove("err");
} else {
  totalAmount.innerText = "$0.00";
  document.querySelector(".billErr").style.display = "inline";
  document.querySelector(".peopleErr").style.display = "inline";
  billInput.classList.add("err");
  people.classList.add("err");
}};

function peopleCal() {
  var tipResult = (tipCustom.value / 100) * billInput.value;
  var inputPerPerson = people.value || 1;
  if (people.value && billInput.value) {
    tipAmount.innerText = `$${(tipResult / inputPerPerson).toFixed(2)}`;
    totalAmount.innerText = `$${(parseFloat(tipResult) + parseFloat(billInput.value) / inputPerPerson).toFixed(2)}`;
    document.querySelector(".peopleErr").style.display = "none";
    document.querySelector(".billErr").style.display = "none";
    people.classList.remove("err");
    billInput.classList.remove("err");
  } else if (people.value && !billInput.value) {
    document.querySelector(".billErr").style.display = "inline";
    document.querySelector(".peopleErr").style.display = "none";
    billInput.classList.add("err");
    people.classList.remove("err");
    tipCustom.value = "";
  } else if (!people.value && billInput.value) {
    document.querySelector(".peopleErr").style.display = "inline";
    people.classList.add("err");
  } else {
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
    document.querySelector(".billErr").style.display = "inline";
    billInput.classList.add("err");
  }};

function clearAll() {
  billInput.value = "";
  tipCustom.value = "";
  people.value = "";
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  document.querySelector(".billErr").style.display = "none";
  document.querySelector(".peopleErr").style.display = "none";
  billInput.classList.remove("err");
  people.classList.remove("err");
};
