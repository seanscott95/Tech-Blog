const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/newPost", withAuth, async (req, res) => {
    try {
        res.render("new-post");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/editPost/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['name'],
              },
              {
                model: Comment,
                attributes: ['id', 'description', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['name'],
                }
              },
            ],
          });
      
          const post = postData.get({ plain: true });
      
          res.render('edit-post', {
            ...post
          });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;