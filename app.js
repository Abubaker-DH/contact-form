const inputs = document.querySelectorAll(".input");

// add focus class
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

// remove focus class
function blurFunc() {
  let parent = this.parentNode;
  // remve if the input empty
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
