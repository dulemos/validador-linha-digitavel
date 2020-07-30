const isCovenant = ({ digitableLine }) => {
  return digitableLine.substr(0, 1) == 8;
};

module.exports = isCovenant;
