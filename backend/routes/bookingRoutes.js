const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

router.post("/book",auth,bookingController.bookSlot);
router.get("/my",auth,bookingController.myBookings);

module.exports = router;
