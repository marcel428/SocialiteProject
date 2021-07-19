const httpStatus = require('http-status');
const path = require('path');

const nodemailer = require("nodemailer");
const { emailConfig, smsConfig, culqiConfing } = require("../../config/vars");
const client = require('twilio')(smsConfig.Sid, smsConfig.authToken);
const bcrypt = require('bcryptjs');
const { env, baseUrl } = require('../../config/vars');
const Culqi = require('culqi-node');
const APIError = require('../utils/APIError');
const Template = require('../models/template.model');

const formidable = require('formidable');
const youtubedl = require('youtube-dl-exec')
const axios = require('axios');
const { trim } = require('lodash');




/**
 * Load user and append to req.
 * @public
 */


exports.fileUpload = async (req, res) => {

    const file = req.files.myfile;
    console.log('req.body')
    console.log(req.body)

    var rand_no = Date.now();
    const fileName = rand_no + file.name;
    const filePath = path.join(__dirname + './../../public/uploadedVideos/');
    file.mv(filePath + fileName, function (error) {
        if (error) {
            console.log("file upload error", error)
        } else {
            res.status(httpStatus.CREATED).json(fileName);
        }
    });


};
exports.youtube = async (req, res) => {

    //get real video url
    console.log('req.body')
    console.log(req.body)
    youtubedl(req.body.clipUrl)
        .then(output => {
            console.log('output')
            console.log(output)
        })
        .catch((error) => {
            console.log(error)
        });

};
exports.fb = async (req, res) => {



};
exports.twitch = async (req, res) => {
    //get real video url
    youtubedl(req.body.clipUrl, {
        dumpSingleJson: true,
    })
        .then(output => {
            res.status(httpStatus.CREATED).json(output.url);
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.fromTwitch = async (req, res,next) => {
    console.log('req.query')
    console.log(req.query)
    const newQuery = `https://id.twitch.tv/oauth2/token`;

    const params = {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_SECRET,
        grant_type: 'client_credentials',
    }
    axios
        .post(newQuery, null, { params })
        .then(res1 => {
            console.log(`statusCode: ${res1.status}`)
            console.log('res1.data')
            console.log(res1.data)
            const username=req.query.username.trim();
            if (res1.status == 200) {
                const urlForGetUser = `https://api.twitch.tv/helix/users?login=${username}`;
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
                        const broadcaster_id = res2.data.data[0].id;
                        const urlForGetClips = `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcaster_id}`;

                        axios({
                            method: 'get',
                            url: urlForGetClips,
                            headers
                        })
                            .then(async res3 => {
                                console.log(`statusCode: ${res3.status}`)
                                console.log('res3.data')
                                console.log(res3.data)
                                res.status(httpStatus.OK).json(res3.data);
                            })
                            .catch(err => {
                                console.error(err)
                                next(err)
                            })

                    })
                    .catch(err => {
                        console.error(err)
                        next(err)
                    })
            }

        })
        .catch(error => {
            console.error(error)
            next(error)
        })
};
exports.fromFacebook = async (req, res) => {

};
exports.fromYoutube = async (req, res) => {

};






