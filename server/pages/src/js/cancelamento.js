function cancelRoom() {
    var roomNumber = document.getElementById("roomNumber").value;
    var cancellationReason = document.getElementById("cancellationReason").value;
    var operatorName = prompt("Qual é o nome do operador?"); // Solicita ao operador que digite seu nome
    
    // Verificar se o número do quarto, o motivo do cancelamento e o nome do operador estão válidos e prosseguir com o cancelamento
    
    // Simulação de chamada assíncrona para o servidor (pode ser substituída por uma requisição AJAX)
    setTimeout(function() {
      var messageDiv = document.getElementById("message");
      messageDiv.textContent = "O quarto " + roomNumber + " foi cancelado com sucesso.";
      
      // Adicionar linha na tabela de quartos cancelados
      var table = document.getElementById("cancelledRoomsTable");
      var row = table.insertRow(-1);
      var roomNumberCell = row.insertCell(0);
      var cancellationDateCell = row.insertCell(1);
      var cancellationReasonCell = row.insertCell(2);
      var operatorNameCell = row.insertCell(3);
      
      roomNumberCell.textContent = roomNumber;
      cancellationDateCell.textContent = getCurrentDate();
      cancellationReasonCell.textContent = cancellationReason;
      operatorNameCell.textContent = operatorName;
    }, 1000);
  }
  
  function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return day + "/" + month + "/" + year;
  }