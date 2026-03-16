const router = require("express").Router();
const templeController = require("../controllers/templeController");

router.get("/",templeController.getTemples);
router.post("/",templeController.createTemple);

module.exports = router;
