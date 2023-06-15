function generateConfirmationCode(event) {
    event.preventDefault();
    const confirmationCode = Math.random().toString(36).substring(2, 10);
    document.getElementById("confirmation-code").innerText = "Código de Confirmação: " + confirmationCode;
  }

  function toggleInstallments() {
    const installmentsWrapper = document.getElementById("installments-wrapper");
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    if (paymentMethod === "credit-card") {
      installmentsWrapper.classList.add("open");
    } else {
      installmentsWrapper.classList.remove("open");
    }
  }

  function calculateInstallments() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    const installment1 = amount.toFixed(2);
    document.getElementById("installment-1").innerText = "R$ " + installment1;

    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    if (paymentMethod === "credit-card") {
      for (let i = 2; i <= 10; i++) {
        const installmentValue = (amount / i).toFixed(2);
        document.getElementById("installment-" + i).innerText = "R$ " + installmentValue;
      }
    } else {
      for (let i = 2; i <= 10; i++) {
        document.getElementById("installment-" + i).innerText = "";
      }
    }
  }

  const amountInput = document.getElementById("amount");
  amountInput.addEventListener("input", calculateInstallments);
