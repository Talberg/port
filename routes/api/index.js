const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const gameRoutes = require('./gameRoutes')

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/games", gameRoutes)

module.exports = router;
