function calcularExpressao(expressao) {
  try {
    const resultado = eval(expressao);
    console.log(`Resultado: ${resultado}`);
    return resultado;
  } catch (erro) {
    console.log("Expressão inválida");
    return resposta;
  }
}

const resultado = calcularExpressao("(4 + 5 * 8) / 5**2");

console.log(resultado);

const botoes = document.querySelectorAll("button");
const input = document.querySelector("input");
input.value = 0;
let resposta = "";

input.addEventListener("input", () => {
  resposta += input.value;
  console.log(`Valor atualizado no input: ${resposta}`);
});

botoes.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    const valor = event.target.innerText;
    if (valor === "Digitar" || valor === "Enter") {
      const inputValor = input.value;
      const resultado = calcularExpressao(inputValor);
      resposta = "";
      resposta += resultado;
      input.value = resposta;
    } else if (valor === "X") {
      document.querySelector(".menu").style.display = "none";
    } else {
      if (input.value === "0" || resposta === "0") {
        console.log(`Botão clicado: ${valor}`);
        resposta += valor;
        input.value = resposta;
      } else {
        console.log(`Botão clicado: ${valor}`);
        resposta += valor;
        input.value = resposta;
      }
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (
    (event.key >= "0" && event.key <= "9") ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "."
  ) {
    if (input.value === "0") {
      input.value = "";
      input.value += event.key;
      resposta = input.value;
    } else {
      input.value += event.key;
      resposta = input.value;
    }
  }
  if (event.key === "Backspace") {
    input.value = input.value.slice(0, -1);
    resposta = input.value;
    if (
      input.value === null ||
      input.value === undefined ||
      input.value === ""
    ) {
      input.value = 0;
    }
  }

  if (event.key === "Delete") {
    input.value = "0";
    resposta = input.value;
  }

  if (event.key === "Enter") {
    const inputValor = input.value;
    const resultado = calcularExpressao(inputValor);
    resposta = "";
    resposta += resultado;
    input.value = resposta;
  }

  event.preventDefault();
});
