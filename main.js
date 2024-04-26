let display = document.querySelector(".display");
const pattern = /[\*\+\/\-]/;
window.appendToDisplay = function appendToDisplay(input) {
  if (display.value == "" && pattern.test(input)) {
    return;
  } else if (pattern.test(display.value.slice(-1)) && !pattern.test(input)) {
    display.value += input;
  } else if (!pattern.test(display.value.slice(-1))) {
    display.value += input;
  } else {
    return;
  }
};
window.calculate = function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    if (error) {
      return;
    }
  }
};

window.clearDisplay = function clearDisplay() {
  display.value = "";
};
