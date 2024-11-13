// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  adjustScroll();
}

function clearDisplay() {
  display.value = "";
  adjustScroll();
}

function calculate() {
  try {
    // Evaluate the expression in the display
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error"; // Show error if evaluation fails
  }
  adjustScroll();
}

function adjustScroll() {
  // Scroll to show latest input
  display.scrollLeft = display.scrollWidth;
}

// Function to copy displayed value to clipboard
function copyToClipboard() {
  // Check if there is anything to copy
  if (display.value === "") {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard
    .writeText(display.value)
    .then(() => {
      console.log("Content copied to clipboard");
      alert("Copied: " + display.value); // Optional alert for user feedback
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
      alert("Failed to copy text.");
    });
}

function backSpace() {
  display.value = display.value.slice(0, -1);
  adjustScroll();
}
