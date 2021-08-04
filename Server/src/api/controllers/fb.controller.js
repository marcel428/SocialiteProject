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
    

    const newQuery='https://graph.facebook.com/v4.0/oauth/access_token';
    const  params= {
        client_id: process.env.FB_APP_ID,
        client_secret: process.env.FB_APP_SECRET,
        redirect_uri: process.env.FB_REDIRECT_URL,
        code:req.query.code,
      };

    //get access token from twitch

      axios({
        url: newQuery,
        method: 'get',
        params
      })       
        .then(res1 => {
            console.log(`statusCode: ${res1.status}`)
            console.log('res1.data')
            console.log(res1.data)
            if (res1.status == 200) {
                const urlForGetUser = 'https://graph.facebook.com/me';
                //get user info from twtich
                axios({
                    method: 'get',
                    url: urlForGetUser,
                    params: {
                        fields: ['id', 'name','short_name', 'email', 'first_name', 'last_name'].join(','),
                        access_token:res1.data.access_token,
                      },
                })
                    .then(async res2 => {
                        console.log(`statusCode: ${res2.status}`)
                        console.log('res2.data')
                        console.log(res2.data)

                        try {                            
                            const userData = res2.data;
                            if (userData.email)
                                var existEmail = await User.findOne({ email: userData.email });
                            var user;
                            if (existEmail) {                                
                                user = await User.findOneAndUpdate(
                                    {email: userData.email }, 
                                    {password: res1.data.access_token},
                                    {name: userData.name}
                                );
                            } else {                                
                                user = await new User({
                                    email: userData.email,
                                    password: res1.data.access_token,
                                    name: userData.name
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





