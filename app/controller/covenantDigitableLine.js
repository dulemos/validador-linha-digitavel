// 8260000021504820097412322015409829010605940

const covenantDigitableLine = ({digitableLine}, res) => {
    res.status(201).send({
        isDigitableLineValid: true, 
        documentValue: getDocumentValue(digitableLine),
        dueDate: getDueDate(digitableLine),
        barcode: digitableLine 
    })
}

const getDocumentValue =  (digitableLine) => {
    return parseFloat(digitableLine.substr(4, 11)) / 100
}

const getDueDate = (digitableLine) => {
    const year = parseInt(digitableLine.substr(23, 4));
    const month = parseInt(digitableLine.substr(27, 2));
    const day = parseInt(digitableLine.substr(29, 2));

    if(year === 0000) return "sem data de vencimento informada"

    return `${day}/${month}/${year}`;
}

module.exports = covenantDigitableLine;