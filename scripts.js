fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
  .then(resposta => resposta.json()) // Converte a resposta para JSON
  .then(dados => {
    // Acessa o valor da cotação do dólar
    const cotacaoDolar = dados.USDBRL.bid;

    // Exibe no HTML
    document.getElementById("cotacao").textContent = `R$ ${parseFloat(cotacaoDolar).toFixed(2)}`;
  })
  .catch(erro => console.error("Erro ao buscar dados:", erro));
