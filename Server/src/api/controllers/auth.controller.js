const httpStatus = require('http-status');
const User = require('../models/user.model');
const Admin = require('../models/admin.model');
const EmailOtp = require('../models/emailOtp.model');
const RefreshToken = require('../models/refreshToken.model');
const moment = require('moment-timezone');
const { env, jwtExpirationInterval } = require('../../config/vars');
const { baseWebUrl } = require('../../config/vars');
const Culqi = require('culqi-node');
const { culqiConfing } = require('../../config/vars');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const nodemailer = require('nodemailer');

/**
 * Returns a formated object with tokens
 * @private
 */
function generateTokenResponse(user, accessToken) {
  const tokenType = 'Bearer';
  const refreshToken = RefreshToken.generate(user).token;
  const expiresIn = moment().add(jwtExpirationInterval, 'minutes');
  return {
    tokenType,
    accessToken,
    refreshToken,
    expiresIn,
  };
}

/**
 * Returns jwt token if registration was successful
 * @public
 */
exports.register = async (req, res) => {
  try {
    console.log('sdf');
    console.log(req.body)
    const userData = req.body;
    if (userData.email)

      var existEmail = await User.findOne({ email: userData.email });

    if (existEmail) {
      return res.json({ error: 'email is duplicated', status: httpStatus.CONFLICT });
    } else {
      const user = await new User(userData).save();
      const userTransformed = user.transform();
      const token = user.token();
      return res.json({ token, user: userTransformed, status: httpStatus.CREATED });
    }

  } catch (error) {
    console.log("register:", error);
  }
};

/**
 * Returns jwt token if valid username and password is provided
 * @public
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // validate
    if (!email || !password)
      return res.json({ error: 'Not all fields have been entered.', status: httpStatus.BAD_REQUEST });

    const user = await User.findOne({ email: email });
    if (!user)
      return res.json({ error: 'No account with this email has been registered.', status: httpStatus.BAD_REQUEST });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ error: 'Invalid credentials.', status: httpStatus.BAD_REQUEST });

    const token = user.token();
    console.log('token')
    console.log(token)
    const userTransformed = user.transform();
    res.json({ token, user: userTransformed, status: httpStatus.CREATED });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error.message });
    return next(error)
  }
};



/**
 * @api post v1/auth/verify-email
 *When user click the link in his email
 */

exports.verifyEmail = async (req, res, next) => {
  try {
    const fakeToken = req.params.token;
    const buff = Buffer.from(fakeToken, 'base64')
    const email = buff.toString('utf-8');
    const user = await User.findOne({ email: email });
    const userModel = user ? User : Admin;
    await userModel.findOneAndUpdate({ email: email }, { status: "active" }, { new: true }).then(result => {
      res.status(200).json(result);
      //res.redirect(baseWebUrl+'auth/sign-in');
    })
  } catch (e) {
    return next(e)
  }
};

/**
 * @api post v1/auth/verify-sms
 * When user verify with code using his phone number
 *
 * */
exports.verifySMS = async (req, res, next) => {
  try {
    const smsCode = req.body.code.smsCode;
    const fakeToken = req.body.token;
    const token = Buffer.from(fakeToken, 'base64');
    const phoneNumber = token.toString('utf-8');
    const user = await User.findOne({ phoneNumber: phoneNumber });
    const userModel = user ? User : Admin;
    await userModel.findOneAndUpdate({ phoneNumber: phoneNumber, smsCode: smsCode }, { status: "active" }, { new: true }).then(result => {
      res.status(200).json(result)
    });
  } catch (e) {
    return next(e);
  }
};

exports.sendCode = async (req, res, next) => {
  try {
    const email = req.body.email;
    const code = Math.floor(Math.random() * 1000000);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'samjose0294@gmail.com',
        pass: 'ktr1117KTR'
      }
    });

    var mailOptions = {
      from: 'samjose0294@gmail.com',
      to: email,
      subject: 'Please check your verification code',
      text: 'Verification code: ' + code
    };

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        const emailOtp = await new EmailOtp({
          otp: code
        }).save();
        res.status(200).json(info.response)
      }
    });

  } catch (e) {
    return next(e);
  }
};

exports.verifyCode = async (req, res, next) => {
  try {
    const code = req.body.code;
    var otp = await EmailOtp.findOne({ otp: code });
    if (otp) {
      var dlt = await EmailOtp.findOneAndDelete({ otp: code });
      if (dlt) {
        res.json({ message: 'success', status: httpStatus.OK })
      } else {
        res.json({ error: 'Invalid OTP', status: httpStatus.INTERNAL_SERVER_ERROR })
      }
    } else {
      res.json({ error: 'Invalid OTP', status: httpStatus.INTERNAL_SERVER_ERROR })
    }
  } catch (e) {
    return next(e);
  }
};

exports.resendCode = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (user) {
      const code = Math.floor(Math.random() * 1000000);

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'samjose0294@gmail.com',
          pass: 'ktr1117KTR'
        }
      });

      var mailOptions = {
        from: 'samjose0294@gmail.com',
        to: email,
        subject: 'Please check your verification code',
        text: 'Verification code: ' + code
      };

      transporter.sendMail(mailOptions, async function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          const emailOtp = await new EmailOtp({
            otp: code
          }).save();
          res.json({ message: info.response, status: httpStatus.OK })
        }
      });
    } else {
      res.json({ error: 'non existed user!', status: httpStatus.INTERNAL_SERVER_ERROR })
    }
  } catch (e) {
    return next(e);
  }
};


exports.resetPassword = async (req, res) => {
  try {
    const userData = req.body;
    if (userData.email)

      var existEmail = await User.findOne({ email: userData.email });

    if (existEmail) {
      const rounds = env === 'test' ? 1 : 10;
      const hash = await bcrypt.hash(userData.password, rounds);
      var updateUser = await User.findOneAndUpdate({ email: userData.email }, { password: hash });
      const userTransformed = updateUser.transform();
      const token = updateUser.token();
      return res.json({ token, user: userTransformed, status: httpStatus.CREATED });

    } else {
      return res.json({ error: 'There is no such email!', status: httpStatus.CONFLICT });
    }


  } catch (error) {
    console.log("register:", error);
  }
};



