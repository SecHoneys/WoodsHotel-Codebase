const form = document.getElementById('cadastroForm');
const listaClientes = document.getElementById('listaClientes');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cartao = document.getElementById('cartao').value;
  const valorQuarto = document.querySelector('input[name="valorQuarto"]:checked').value;
  const modalidade = document.getElementById('modalidade').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const tipoPagamento = document.getElementById('tipoPagamento').value;
  const protocolo = document.getElementById('protocolo').value;

  const cliente = {
    nome: nome,
    email: email,
    telefone: telefone,
    cartao: cartao,
    valorQuarto: valorQuarto,
    modalidade: modalidade,
    checkin: checkin,
    checkout: checkout,
    tipoPagamento: tipoPagamento,
    protocolo: protocolo
  };

  localStorage.setItem(email, JSON.stringify(cliente));

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>Nome:</strong> ${nome}<br>
    <strong>E-mail:</strong> ${email}<br>
    <strong>Telefone:</strong> ${telefone}<br>
    <strong>Dados do Cartão:</strong> ${cartao}<br>
    <strong>Valor do Quarto:</strong> $${valorQuarto}<br>
    <strong>Modalidade do Quarto:</strong> ${modalidade}<br>
    <strong>Check-In:</strong> ${checkin}<br>
    <strong>Check-Out:</strong> ${checkout}<br>
    <strong>Tipo de Pagamento:</strong> ${tipoPagamento}<br>
    <strong>Protocolo:</strong> ${protocolo}<br>
  `;

  const removeButton = document.createElement('button');
  removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  removeButton.classList.add('fa-trash-alt');
  removeButton.addEventListener('click', function() {
    localStorage.removeItem(email);
    listItem.remove();
  });

  listItem.appendChild(removeButton);
  listaClientes.appendChild(listItem);

  form.reset();
});

function carregarClientes() {
  for (let i = 0; i < localStorage.length; i++) {
    const email = localStorage.key(i);
    const cliente = JSON.parse(localStorage.getItem(email));

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Nome:</strong> ${cliente.nome}<br>
      <strong>E-mail:</strong> ${cliente.email}<br>
      <strong>Telefone:</strong> ${cliente.telefone}<br>
      <strong>Dados do Cartão:</strong> ${cliente.cartao}<br>
      <strong>Valor do Quarto:</strong> $${cliente.valorQuarto}<br>
      <strong>Modalidade do Quarto:</strong> ${cliente.modalidade}<br>
      <strong>Check-In:</strong> ${cliente.checkin}<br>
      <strong>Check-Out:</strong> ${cliente.checkout}<br>
      <strong>Tipo de Pagamento:</strong> ${cliente.tipoPagamento}<br>
      <strong>Protocolo:</strong> ${cliente.protocolo}<br>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeButton.classList.add('fa-trash-alt');
    removeButton.addEventListener('click', function() {
      localStorage.removeItem(email);
      listItem.remove();
    });

    listItem.appendChild(removeButton);
    listaClientes.appendChild(listItem);
  }
}

carregarClientes();



/////////////

const valorQuartoRadios = document.querySelectorAll('input[name="valorQuarto"]');
const modalidadeQuartoSelect = document.getElementById('modalidade');

valorQuartoRadios.forEach(radio => {
  radio.addEventListener('click', function() {
    const valorQuarto = this.value;
    let modalidadeQuarto = '';

    if (valorQuarto === '450') {
      modalidadeQuarto = 'Standard';
    } else if (valorQuarto === '980') {
      modalidadeQuarto = 'Deluxe';
    } else if (valorQuarto === '1300') {
      modalidadeQuarto = 'Suite';
    }

    modalidadeQuartoSelect.value = modalidadeQuarto;
  });
});


/////////////////////////


// Selecione o elemento de telefone
var telefoneInput = document.getElementById('telefone');

// Adicione um evento de input para formatar o telefone
telefoneInput.addEventListener('input', function (event) {
  var valor = event.target.value;

  // Remova tudo exceto os dígitos do valor
  valor = valor.replace(/\D/g, '');

  // Formate o valor como (XX) XXXXX-XXXX
  var formattedValue = '';
  if (valor.length > 0) {
    formattedValue = '(' + valor.substring(0, 2) + ') ';
  }
  if (valor.length > 2) {
    formattedValue += valor.substring(2, 7) + '-';
  }
  if (valor.length > 7) {
    formattedValue += valor.substring(7, 11);
  }

  // Atualize o valor do campo de telefone
  event.target.value = formattedValue;
});