const { Router } = require("express");
const { recoveryService } = require("../services/recoveryService");
const recoveryRouter = Router();

recoveryRouter.get("/", async (req, res) => {
  const result = await recoveryService();

  res.status(200).send(result);
});

module.exports = { recoveryRouter };
