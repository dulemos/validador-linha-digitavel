const digitableLine = (barcode, res) => {
  res.status("201").send({ barcode: barcode });
};

module.exports = digitableLine;
