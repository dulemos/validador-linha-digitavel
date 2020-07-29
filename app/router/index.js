const router = require("express").Router();
const digitableLineController = require("../controller/digitableLine");

const isDigitableLineValid = require("../middleware/isDigitableLineValid");
const convertDigitableLine = require("../middleware/convertDigitableLine");

router.get("/digitableLine/:digitableLine", (req, res) => {
  const barcode = convertDigitableLine(req.params);
  isDigitableLineValid(req.params)
    ? digitableLineController(barcode, res)
    : res.status("406").send({ error: "linha digitável inválida" });
});

module.exports = router;
