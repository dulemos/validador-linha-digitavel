const router = require("express").Router();
const digitableLineController = require("../controller/digitableLine");

const barcodeValidation = require("../middleware/barcodeValidation");

router.get("/:barcode", (req, res) => {
  const barcode = barcodeValidation(req.params);
  barcode.err
    ? res.status("406").send({ error: barcode.err.message })
    : digitableLineController(barcode, res);
});

module.exports = router;
