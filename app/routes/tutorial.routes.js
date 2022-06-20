module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();


    router.post("/", tutorials.create); // Create a new Tutorial

    router.get("/", tutorials.findAll); // Retrieve all Tutorials

    router.get("/published", tutorials.findAllPublished); // Retrieve all published Tutorials

    router.get("/:id", tutorials.findOne); // Retrieve a single Tutorial with id

    router.put("/:id", tutorials.update); // Update a Tutorial with id

    router.delete("/:id", tutorials.delete); // Delete a Tutorial with id

    router.delete("/", tutorials.deleteAll); // Delete all Tutorials

    app.use('/api/v1/tutorials', router);
};