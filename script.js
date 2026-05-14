window.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("customer-name");
  const amountInput = document.getElementById("amount");
  const currencySelect = document.getElementById("currency");
  const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("converted-result");
  const table = document.querySelector(".table table");

  const rates = {
    USD: 1280,
    EUR: 1380,
    GBP: 1600,
    JPY: 10.5,
    CNY: 180,
    AUD: 850,
    CAD: 930,
    DRC: 1
  };

  const labels = {
    USD: "USD-RWF",
    EUR: "EUR-RWF",
    GBP: "GBP-RWF",
    JPY: "JPY-RWF",
    CNY: "CNY-RWF",
    AUD: "AUD-RWF",
    CAD: "CAD-RWF",
    DRC: "DRC-RWF"
  };

  convertButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;

    if (!name) {
      alert("Please enter customer name.");
      nameInput.focus();
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      amountInput.focus();
      return;
    }

    if (!rates[currency]) {
      alert("Please select a currency.");
      currencySelect.focus();
      return;
    }

    const converted = amount * rates[currency];
    resultDiv.textContent = `Converted amount: ${converted.toFixed(2)} RWF`;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${amount.toFixed(2)}</td>
      <td>${labels[currency]}</td>
      <td>${converted.toFixed(2)}</td>
    `;

    table.appendChild(row);

    nameInput.value = "";
    amountInput.value = "";
    currencySelect.value = "RWF";
  });
});
