const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all promotions to you.");
  })
  .post((req, res) => {
    res.end(`Will create new promotion: ${req.body.name}
                    with description: ${req.body.description}.`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operations not supported on /promotions.`);
  })
  .delete((req, res) => {
    res.end("Deleting all promotions.");
  });

promotionRouter
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send information about promotion: ${req.params.promotionId}`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operations not supported on /promotions/${req.params.promotionId}`
    );
  })
  .put((req, res) => {
    res.end(`Will update promotion: ${req.body.name}
                with description: ${req.body.description}.`);
  })
  .delete((req, res) => {
    res.end(`Deleting promotion ${req.params.promotionId}`);
  });

module.exports = promotionRouter;
