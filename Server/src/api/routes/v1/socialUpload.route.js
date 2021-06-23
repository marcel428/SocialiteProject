const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/socialUpload.controller');
const { authorize, SUPER_ADMIN, ADMIN, PROVIDER } = require('../../middlewares/auth');
const router = express.Router();

router
  .route('/googleDrive/:fileName')
  .get(controller.googleDrive);
  router
  .route('/youtube')
  .post(controller.youtube);

module.exports = router;
