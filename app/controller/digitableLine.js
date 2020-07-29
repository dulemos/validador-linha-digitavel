const digitableLine = (barcode, res) => {
  const value = getDocumentValue(barcode);
  const dueDate = getDocumentDueDate(barcode);
  console.log(dueDate)
  res.status("201").send({ barcode: barcode, value: value });
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
