// Create web server
var express = require('express');
var router = express.Router();
// Get the comments controller
var commentsCtrl = require('../controllers/comments');
// Get the auth helper
var authHelper = require('../helpers/auth');
// Get the passport module
var passport = require('passport');

// GET /comments
// Get all comments
router.get('/', authHelper.checkAuthenticated, commentsCtrl.getAllComments);

// POST /comments
// Create a new comment
router.post('/', authHelper.checkAuthenticated, commentsCtrl.createComment);

// GET /comments/:id
// Get a comment by id
router.get('/:id', authHelper.checkAuthenticated, commentsCtrl.getCommentById);

// PUT /comments/:id
// Update a comment by id
router.put('/:id', authHelper.checkAuthenticated, commentsCtrl.updateCommentById);

// DELETE /comments/:id
// Delete a comment by id
router.delete('/:id', authHelper.checkAuthenticated, commentsCtrl.deleteCommentById);

module.exports = router;
