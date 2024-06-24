const express = require('express');
const router = express.Router();
const controller = require('../controlleur/controlleur');

router.get('/posts', controller.getAllPosts);
router.post('/posts', controller.createPost);

router.get('/employees', controller.getAllEmployees);
router.post('/employees', controller.createEmployee);

router.get('/files', controller.getAllFiles);
router.post('/files', controller.createFile);

router.get('/extras', controller.getAllExtras);
router.post('/extras', controller.createExtra);

module.exports = router;
