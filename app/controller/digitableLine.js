const digitableLine = (barcode, res) => {
  res.status(201).send({ 
    isDigitableLineValid: true, 
    documentValue: getDocumentValue(barcode),
    dueDate: getDocumentDueDate(barcode),
    barcode: barcode  
  });
};

const getDocumentValue = (barcode) => {
  const valueSection = barcode.split("").splice(9, 10).join("");
  return parseFloat(valueSection) / 100;
};

const getDocumentDueDate = barcode => {
  const dueDateSection = barcode.split("").splice(5, 4).join("");
  const days = parseInt(dueDateSection);
  const baseDate = new Date('10/07/1997');
  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());

    date.setDate(date.getDate() + days);

    return date
  }

  const dueDate = baseDate.addDays(days);
  return dueDate
}

module.exports = digitableLine;
