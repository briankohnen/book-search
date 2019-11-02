const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

router.route("/:id")
  .delete(bookController.remove);

router.route('/count').get(bookController.count);

module.exports = router;
