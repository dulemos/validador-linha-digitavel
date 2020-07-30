const router = require("express").Router();
const digitableLineController = require("../controller/digitableLine");

const isDigitableLineValid = require("../middleware/isDigitableLineValid");
const convertDigitableLine = require("../middleware/convertDigitableLine");

const isCovenant = require("../middleware/isCovenant");
const isCovenantDigitableValid = require("../middleware/isCovenantDigitableLineValid");
const covenantDigitableLineController = require("../controller/covenantDigitableLine");

router.get("/digitableLine/:digitableLine", (req, res) => {
  if(isCovenant(req.params)){
    isCovenantDigitableValid(req.params) ? covenantDigitableLineController(req.params, res) : res.status("406").send({
      error: "linha digitável inválida",
      isCovenant: isCovenant(req.params),
      isCovenantDigitableValid: isCovenantDigitableValid(req.params)
    })
  }else{
    const barcode = convertDigitableLine(req.params);
    isDigitableLineValid(req.params)
      ? digitableLineController(barcode, res)
      : res.status("406").send({ error: "linha digitável inválida" });
  }
});

module.exports = router;
