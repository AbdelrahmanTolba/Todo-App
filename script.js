"use strict";
const modeBtn = document.querySelector(".mode");
const addInput = document.querySelector(".add-box");
const addBtn = document.querySelector(".add");
const todoBox = document.querySelector(".items");

let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  modeBtn.classList.add("active");
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  document.body.classList.remove("dark");
  modeBtn.classList.remove("active");
  localStorage.setItem("darkMode", null);
};
darkMode == "enabled" ? enableDarkMode() : disableDarkMode();

modeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") enableDarkMode();
  else disableDarkMode();
});
let numberOfItem = 1;

const addItem = (item) => {
  numberOfItem += 1;
  todoBox.innerHTML += `            <li class="item">
  <label for="checkbox-${numberOfItem}" class="form-control">
    <input type="checkbox" name="checkbox" id="checkbox-${numberOfItem}" />
    <span>${item}</span>
  </label>
  <button class="btn delete">
    <img
      src="images/icon-cross.svg"
      alt="delete"
      class="delete-img"
    />
  </button>
</li>`;
};
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!addInput.value) return;
  addItem(addInput.value);
  addInput.value = "";
  console.log(document.querySelectorAll(".item").length);
});
