const express = require("express");
const { recoveryRouter } = require("./routes/recoveryRoute");

const server = express();

server.use("/recovery", recoveryRouter);

module.exports = { server };
