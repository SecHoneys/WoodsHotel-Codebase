// Obtém o elemento do botão "Verificar"
const btnVerificar = document.getElementById('btn-verificar');

// Obtém o elemento do pop-up
const popup = document.getElementById('popup');

// Obtém o elemento de entrada do número de protocolo
const protocoloInput = document.getElementById('protocolo-input');

// Obtém o elemento para exibir o número de protocolo no pop-up
const protocoloNumero = document.getElementById('protocolo-numero');

// Obtém a lista de motivos de cancelamento
const motivoCancelamentoLista = document.querySelectorAll('#motivo-cancelamento li');

// Adiciona um evento de clique ao botão "Verificar"
btnVerificar.addEventListener('click', function() {
   // Obtém o número de protocolo digitado
   const numeroProtocolo = protocoloInput.value;

   // Atualiza o número de protocolo exibido no pop-up
   protocoloNumero.textContent = numeroProtocolo;

   // Exibe o pop-up
   popup.style.display = 'block';
});

// Adiciona um evento de clique a cada motivo de cancelamento
motivoCancelamentoLista.forEach(function(motivo) {
   motivo.addEventListener('click', function() {
      // Obtém o motivo de cancelamento selecionado
      const motivoSelecionado = this.textContent;

      // Faça o que desejar com o motivo selecionado
      console.log('Motivo selecionado:', motivoSelecionado);

      // Esconda o pop-up após o motivo ser selecionado
      popup.style.display = 'none';
   });
});

//////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  var closeIcon = document.querySelector('.close-icon');
  var popup = document.getElementById('popup');

  closeIcon.addEventListener('click', function() {
     popup.style.display = 'none';
  });
});

////////////////////////
var menuItens = document.querySelectorAll('#motivo-cancelamento li');
var conteudoAlternativo = document.getElementById('conteudo-alternativo');

function abrirPopUpConteudoAlternativo() {
   popup.style.display = 'none';
   conteudoAlternativo.style.display = 'block';
}

for (var i = 0; i < menuItens.length; i++) {
   menuItens[i].addEventListener('click', abrirPopUpConteudoAlternativo);
}

var closeIcons = document.querySelectorAll('.close-icon');
for (var j = 0; j < closeIcons.length; j++) {
   closeIcons[j].addEventListener('click', function() {
      popup.style.display = 'none';
      conteudoAlternativo.style.display = 'none';
   });
}