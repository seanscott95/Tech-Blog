const router = require("express").Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
    try {
        // const postData = await Post.findAll({
        //     include: [
        //         {
        //           model: User,
        //           attributes: ['name'],
        //         },
        //       ],
        // });

        // const posts = postData.map((post) => post.get ({ plain: true }));

        res.render('dashboard', { posts });
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