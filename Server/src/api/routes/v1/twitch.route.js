const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/twitch.controller');

const router = express.Router();



router.route('/callback')
  .get(controller.callback);


module.exports = router;
