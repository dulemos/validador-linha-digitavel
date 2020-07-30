// tamanho - campo
// 1 identificação do produto
// 1 identificação do segmento
// 1 identificação do valor real ou referencia
// 1 dígito verificador geral (módulo 10 ou módulo 11)
// 11 valor
// 4 identificação da empresa/órgão
// 25 livre
// 8 cnpj/mf
// 21  livre

const isCovenantDigitableLineValid = ({ digitableLine }) => {
  const dv = digitableLine.substr(3, 1);
  const validDv = calcCovenantDV(digitableLine);
  return parseInt(dv) === validDv;
};

const calcCovenantDV = (digitableLine) => {
  const currency = parseInt(digitableLine.substr(2, 1));

  if (currency === 6 || currency === 7) {
    return mod10(digitableLine);
  } else if (currency === 8 || currency === 9) {
    return mod11(digitableLine);
  } else {
    return -1;
  }
};

const mod10 = (digitableLine) => {
  const digitableLineArr = digitableLine
    .split("")
    .splice(3, 1)
    .map((value, index) => {
      return index % 2 ? value * 1 : value * 2;
    })
    .map((value) => (value > 10 ? sum((val + "").split) : value));

  const total = digitableLineArr.reduce((total, element) => total + element);

  let dv = 10 - (total % 10);
  if (dv === 10) dv = 0;
  return dv;
};

const mod11 = (digitableLine) => {
  const digitableLineSum = digitableLine
    .split("")
    .splice(3, 1)
    .reverse()
    .map((v, i) => {
      return v * multiplier(i);
    })
    .reduce((t, value) => t + value);

  const res = 11 - (digitableLineSum % 11);

  if (res === 0 || res === 10 || res === 11) res = 1;

  return res;
};

const sum = (numArr) => {
  let total = 0;
  numArr.forEach((element) => {
    total += parseInt(element);
  });
  return total;
};

module.exports = isCovenantDigitableLineValid;
