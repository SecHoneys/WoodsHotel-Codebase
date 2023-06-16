function generateConfirmationCode(event) {
  event.preventDefault();
  const confirmationCode = Math.random().toString(36).substring(2, 10);
  document.getElementById("confirmation-code").innerText =
    "Código de Confirmação: " + confirmationCode;
}
// Abre o menu de parcelamento

function toggleInstallments() {
  const installmentsWrapper = document.getElementById("installments-wrapper");
  const paymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  ).value;
  if (paymentMethod === "credit-card") {
    installmentsWrapper.classList.add("open");
  } else {
    installmentsWrapper.classList.remove("open");
  }
}

// Código

function updateAmount() {
  var hotelSelect = document.getElementById("hotel");
  var amountElement = document.getElementById("amount");
  var selectedOption = hotelSelect.value;
  var amount;

  // Atualiza o valor do quarto com base na opção selecionada
  switch (selectedOption) {
    case "standard":
      amount = "R$ 450";
      break;
    case "deluxe":
      amount = "R$ 980";
      break;
    case "suite":
      amount = "R$ 1300";
      break;
    default:
      amount = "R$ 0";
  }

  // Atualiza o valor exibido no elemento de input
  amountElement.value = amount;
}

function updateInstallments() {
  var hotelSelect = document.getElementById("hotel");
  var installmentElements = document.querySelectorAll(
    ".installments-table tbody tr td span"
  );

  var selectedOption = hotelSelect.value;
  var amount;

  // Atualiza o valor do quarto com base na opção selecionada
  switch (selectedOption) {
    case "standard":
      amount = 450;
      break;
    case "deluxe":
      amount = 980;
      break;
    case "suite":
      amount = 1300;
      break;
    default:
      amount = 0;
  }

  // Atualiza os valores das parcelas
  for (var i = 1; i <= 10; i++) {
    var installmentElement = document.getElementById("installment-" + i);
    var installmentAmount = (amount / i).toFixed(2);

    installmentElement.textContent = "$" + installmentAmount;
  }
}

// Chama a função inicialmente para exibir os valores das parcelas com base na opção selecionada
updateInstallments();

function toggleInstallments() {
  var paymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  ).value;
  var installmentsWrapper = document.getElementById("installments-wrapper");
  var popup = document.getElementById("popup");
  var fakeBoleto = document.getElementById("fake-boleto");

  if (paymentMethod === "boleto") {
    installmentsWrapper.style.display = "none";
    fakeBoleto.style.display = "block";
    popup.style.display = "none";
  } else if (paymentMethod === "pix") {
    installmentsWrapper.style.display = "none";
    fakeBoleto.style.display = "none";
    popup.style.display = "block";
  } else {
    installmentsWrapper.style.display = "block";
    fakeBoleto.style.display = "none";
    popup.style.display = "none";
  }
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

/// Cartão automatico os "."
var cardInput = document.getElementById("card");

cardInput.addEventListener("input", function () {
  var cardNumber = this.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  var maxLength = 23; // Limite máximo de dígitos

  if (cardNumber.length > maxLength) {
    cardNumber = cardNumber.slice(0, maxLength); // Trunca o número para o limite máximo
  }

  var formattedNumber = formatCardNumber(cardNumber); // Formata o número do cartão com os pontos

  this.value = formattedNumber;
});

function formatCardNumber(cardNumber) {
  var formattedNumber = "";
  for (var i = 0; i < cardNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedNumber += " "; // Adiciona um espaço a cada 4 dígitos
    }
    formattedNumber += cardNumber.charAt(i);
  }
  return formattedNumber;
}

// Data de validade "25/25"
document.getElementById("expiry").addEventListener("input", function () {
  let expiryDate = this.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  let formattedDate = formatExpiryDate(expiryDate); // Formata a data de validade com a barra

  this.value = formattedDate;
});

function formatExpiryDate(expiryDate) {
  let formattedDate = "";
  for (let i = 0; i < expiryDate.length; i++) {
    if (i === 2) {
      formattedDate += "/"; // Adiciona a barra após os dois primeiros dígitos
    }
    formattedDate += expiryDate.charAt(i);
  }
  return formattedDate;
}

/// Valor Automatico

function updateAmount() {
  var hotelSelect = document.getElementById("hotel");
  var selectedOption = hotelSelect.options[hotelSelect.selectedIndex];
  var amountInput = document.getElementById("amount");

  if (selectedOption.value === "standard") {
    amountInput.value = "R$ 450";
  } else if (selectedOption.value === "deluxe") {
    amountInput.value = "R$ 980";
  } else if (selectedOption.value === "suite") {
    amountInput.value = "R$ 1300";
  }
}
