const router = require('express').Router();
const { User } = require('../../models');

router.get("/", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/logout", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;