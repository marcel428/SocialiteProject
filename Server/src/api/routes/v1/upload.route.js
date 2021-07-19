const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/upload.controller');
const { authorize, SUPER_ADMIN, ADMIN, PROVIDER } = require('../../middlewares/auth');
const router = express.Router();

router
  .route('/')
  .post(controller.fileUpload);
router
  .route('/youtube')
  .post(controller.youtube);
router
  .route('/fb')
  .get(controller.fb);
router
  .route('/twitch')
  .post(controller.twitch);

  router
  .route('/fromTwitch')
  .get(controller.fromTwitch);

  router
  .route('/fromFacebook')
  .get(controller.fromFacebook);

  router
  .route('/fromYoutube')
  .get(controller.fromYoutube);

module.exports = router;
