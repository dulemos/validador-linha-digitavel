const isDigitableLineValid = ({ digitableLine }) => {
  const sectionOne = digitableLine.split("").splice(0, 9);
  const sectionTwo = digitableLine.split("").splice(10, 10);
  const sectionThree = digitableLine.split("").splice(21, 10);

  const sectionOneDv = getDigitableLineDV(sectionOne);
  if(sectionOneDv != digitableLine.substr(9, 1)) return false
  
  const sectionTwoDv = getDigitableLineDV(sectionTwo);
  if(sectionTwoDv != digitableLine.substr(20, 1)) return false
  
  const sectionThreeDv = getDigitableLineDV(sectionThree);
  if(sectionThreeDv != digitableLine.substr(31, 1)) return false

  return true;
};

const getDigitableLineDV = (section) => {
  const result = section.reverse().map((value, index) => {
    if (index % 2) {
      return value * 1;
    } else {
      return value * 2;
    }
  });

  const arr = result.map((val) => (val > 10 ? sum((val + "").split("")) : val));
  const total = arr.reduce((total, element) => total + element);
  // (Math.ceil(total / 10) * 10)
  const dv = 10 - (total % 10);
  if(dv === 10) dv = 0
  return dv;
};

const sum = (numArr) => {
  let total = 0;
  numArr.forEach((element) => {
    total += parseInt(element);
  });
  return total;
};

module.exports = isDigitableLineValid;
