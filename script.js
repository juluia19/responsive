function adicionarValor(valor) {
    document.getElementById("tela").value += valor;
  }
  
  function calcular() {
    const tela = document.getElementById("tela");
    try {
      tela.value = eval(tela.value);
    } catch (error) {
      tela.value = "Erro";
    }
  }
  
  function limpar() {
    document.getElementById("tela").value = "";
  }
  