const barcodeValidation = ({ barcode }) => {
  if (barcode.length !== 44)
    return (barcode = {
      err: { message: "Linha digitável não possui 44 caracteres." },
    });

  if (!calcDV(barcode))
    return (barcode = { err: { message: "Digito verificador inválido" } });

  return barcode;
};

// Verifica se o dígito verificador da linha digitável é válido
const calcDV = (barcode) => {
  const barcodeArr = barcode.split("");

  const dv = barcodeArr.splice(4, 1);
  const multi = barcodeArr.reverse().map((v, i) => {
    return v * multiplier(i);
  });

  const sum = multi.reduce((sum, value) => sum + value);
  const res = 11 - (sum % 11);

  console.log();
  return parseInt(dv[0]) === res;
};


// Função que retorna sempre o número entre 2 e 9 correspondente a posição do digito recebido.
const multiplier = (num) => {
  num += 10;
  while (num > 9) {
    num = num - 10 + 2;
  }
  return num;
};

module.exports = barcodeValidation;
