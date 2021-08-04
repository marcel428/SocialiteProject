const httpStatus = require('http-status');
const path = require('path');
const https = require('https');
const nodemailer = require("nodemailer");
const { emailConfig, smsConfig, culqiConfing } = require("../../config/vars");
const client = require('twilio')(smsConfig.Sid, smsConfig.authToken);
const bcrypt = require('bcryptjs');
const { env, baseUrl } = require('../../config/vars');
const Culqi = require('culqi-node');
const APIError = require('../utils/APIError');
const axios = require('axios');
const User = require('../models/user.model');


/**
 * Load user and append to req.
 * @public
 */


exports.callback = async (req, res) => {
    console.log('req.query')
    console.log(req.query)
    const newQuery = `https://id.twitch.tv/oauth2/token`;

    const params = {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.TWITCH_REDIRECT_URL,
    }

    //get access token from twitch

    axios
        .post(newQuery, null, { params })
        .then(res1 => {
            console.log(`statusCode: ${res1.status}`)
            console.log('res1.data')
            console.log(res1.data)
            if (res1.status == 200) {
                const urlForGetUser = `https://api.twitch.tv/helix/users`;
                const headers = {
                    'Authorization': `Bearer ${res1.data.access_token}`,
                    'Client-Id': process.env.TWITCH_CLIENT_ID,
                }

                //get user info from twtich
                axios({
                    method: 'get',
                    url: urlForGetUser,
                    headers
                })
                    .then(async res2 => {
                        console.log(`statusCode: ${res2.status}`)
                        console.log('res2.data.data')
                        console.log(res2.data.data)

                        try {                            
                            console.log(req.body)
                            const userData = res2.data.data[0];
                            if (userData.login)
                                var existName = await User.findOne({ email: userData.email });
                            var user;
                            if (existName) {                                
                                user = await User.findOneAndUpdate(
                                        { name: userData.login }, 
                                        { password: res1.data.access_token },
                                        {email: userData.email}
                                    );
                            } else {                                
                                user = await new User({
                                    email: userData.email,
                                    name: userData.login,
                                    password: res1.data.access_token
                                }).save();
                                //   return res.json({ token, user: userTransformed, status: httpStatus.CREATED });
                            }
                            const userTransformed = user.transform();

                            const token = res1.data.access_token;
                            const redirectQuery = JSON.stringify({
                                token, user: userTransformed
                            })
                            res.redirect(`${process.env.BASE_URL}?query=${redirectQuery}`);

                        } catch (error) {
                            console.log("register:", error);
                        }
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }

        })
        .catch(error => {
            console.error(error)
        })
};





