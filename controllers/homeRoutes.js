const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
              ],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));

        res.render('homepage', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/dashboard", async (req, res) => {
    try {
        res.render('dashboard', { logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
          }
        
          res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
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
      
          res.render('single-post', {
            ...post,
            logged_in: req.session.logged_in
          });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;