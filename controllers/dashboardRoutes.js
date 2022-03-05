const router = require("express").Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/newPost", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/editPost:id", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;