const router = require('express').Router();
const { Comment } = require('../../models');

// Creates a comment
router.post("/", async (req, res) => {
    try {
        
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Deletes a comment
router.delete("/:id", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;