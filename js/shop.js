const price_ranges = document.querySelectorAll(".ranges input");
const progress_bar = document.querySelector(".price-progress");
const minNumberInput = document.querySelector(".minNumber");
const maxNumberInput = document.querySelector(".maxNumber");
const minRangeInput = document.querySelector(".min_price_range");
const maxRangeInput = document.querySelector(".max_price_range");
const priceProgress = document.querySelector(".price-progress");

price_ranges.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_ranges[0].value);
    let maxValue = parseInt(price_ranges[1].value);
    let price_gap = 100;

    if (maxValue - minValue < price_gap) {
      if (e.target.className === "min_price_range") {
        price_ranges[0].value = maxValue - price_gap;
      } else {
        price_ranges[1].value = minValue + price_gap;
      }
    } else {
      progress_bar.style.left = (minValue / input[0].max) * 100 + "%";

      progress_bar.style.right = 100 - (maxValue / input.max) * 100 + "%";
    }
  });
});

// Function to synchronize range inputs with number inputs
function syncRangeInputs() {
  minRangeInput.value = minNumberInput.value;
  maxRangeInput.value = maxNumberInput.value;
}

// Function to synchronize number inputs with range inputs
function syncNumberInputs() {
  minNumberInput.value = minRangeInput.value;
  maxNumberInput.value = maxRangeInput.value;
}

// Add event listeners for number inputs
minNumberInput.addEventListener("input", function () {
  syncRangeInputs();
});

maxNumberInput.addEventListener("input", function () {
  syncRangeInputs();
});

// Add event listeners for range inputs
minRangeInput.addEventListener("input", function () {
  syncNumberInputs();
  updatePriceProgress();
});

maxRangeInput.addEventListener("input", function () {
  syncNumberInputs();
  updatePriceProgress();
});

// Function to update price progress bar
function updatePriceProgress() {
  const range = maxRangeInput.max - minRangeInput.min;
  const value = maxRangeInput.value - minRangeInput.min;
  const percentage = (value / range) * 100;

  // priceProgress.style.width = percentage + "%";
}

// Initial synchronization
syncRangeInputs();
updatePriceProgress();
