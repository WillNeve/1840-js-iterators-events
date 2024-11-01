console.log("Hello from JavaScript!");

// manually creating a <ul> with abba <li>'s
const abbaNames = ["Bjorn", "Benny", "Anni-frid", "Agnetha"];

let abbaNamesAsLis = "";

abbaNames.forEach((name) => {
  abbaNamesAsLis += `<li>${name}</li>`;
});

const abbaNamesUl = `<ul>${abbaNamesAsLis}</ul>`;

document.body.insertAdjacentHTML("beforeend", abbaNamesUl);

// updating the <li>'s contents and <ul>'s styling
const abbaLis = document.querySelectorAll("li");
const abbaUl = document.querySelector("ul");

abbaLis.forEach((li) => {
  li.innerHTML += "🎵";
});

abbaUl.style.listStyleType = "upper-roman";

// reading data-attributes from the `.dataset` property
const agnethaInstrument = document.getElementById("agnetha").dataset.instrument;
console.log(agnethaInstrument);

const abba = document.querySelectorAll(".abba");

abba.forEach((member) => {
  member.innerHTML += `: ${member.dataset.instrument}`;
});

// our first event listener
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("the button was clicked");
});

// event listeners being applied iteratively
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.target.classList.toggle("img-circle");
  });
});

// preventing default behaviour of an event through the `.preventDefault()` method of the event object
document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
});

// final livecode  (select/unselect all)
const selectAll = document.getElementById("select-all-checkbox");
const formCheckboxes = document.querySelectorAll("form input");

selectAll.addEventListener("click", (event) => {
  const checked = event.target.checked;

  formCheckboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
});
