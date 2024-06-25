const express = require("express");
const router = express.Router();

const usercontrollers = require("../controllers/users");
router.get("/". userscontroller.getAll);

router.get("/:id", userscontrollers.getSingle);

module.export = router; 