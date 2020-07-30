// LINHA DIGITAVEL = 00190500954014481606906809350314337370000000100
//  AAABCCCCCXDDDDDDDDDDYEEEEEEEEEEZKUUUUVVVVVVVVVV
// CÓDIGO DE BARRAS = 00193373700000001000500940144816060680935031

const convertDigitableLine = ({ digitableLine }) => {
  const financialInstitution = digitableLine.substr(0, 3);
  const currency = digitableLine.substr(3, 1);
  const c = digitableLine.substr(4, 5);
  const d = digitableLine.substr(10, 10);
  const e = digitableLine.substr(21, 10);
  const dueDateFactor = digitableLine.substr(33, 4);
  const documentValue = digitableLine.substr(37, 11);
  let barcode = `${financialInstitution}${currency}${dueDateFactor}${documentValue}${c}${d}${e}`;
  barcode = `${barcode.substr(0, 4)}${getDV(barcode)}${barcode.substr(
    4,
    40
  )}`;
  return barcode;
};

const getDV = (barcode) => {
  const barcodeArr = barcode.split("");
  const multi = barcodeArr.reverse().map((v, i) => {
    return v * multiplier(i);
  });

  const sum = multi.reduce((sum, value) => sum + value);
  const res = 11 - (sum % 11);

  if (res === 0 || res === 10 || res === 11) res = 1;

  return res;
};

// Função que retorna sempre o número entre 2 e 9 correspondente a posição do digito recebido.
const multiplier = (num) => {
    num += 10;
    while (num > 9) {
      num = num - 10 + 2;
    }
    return num;
  };

module.exports = convertDigitableLine;
