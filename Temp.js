document.addEventListener("DOMContentLoaded", () => {
  let c = document.querySelector("#Celsius");
  let change = document.querySelector("button");
  let result = document.querySelector("#resultText");

  change.addEventListener("click", () => {
    result.textContent = (c.value * 9) / 5 + 32;
  });
});
