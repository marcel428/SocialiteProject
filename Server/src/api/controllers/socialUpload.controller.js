const httpStatus = require('http-status');
const path = require('path');
const fs = require('fs');

const { emailConfig, smsConfig, culqiConfing } = require("../../config/vars");
const client = require('twilio')(smsConfig.Sid, smsConfig.authToken);
const bcrypt = require('bcryptjs');
const { env, baseUrl } = require('../../config/vars');
const Culqi = require('culqi-node');
const APIError = require('../utils/APIError');
const YtVideoList = require('../models/ytVideoList.model');

const { google } = require('googleapis');
const GoogleDriveService = require('../services/googleDriveService');


const { authorize, uploadVideo } = require('../services/youtube');

/**
 * Load user and append to req.
 * @public
 */


exports.googleDrive = async (req, res) => {
    const driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID || '';
    const driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET || '';
    const driveRedirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI || '';
    const driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN || '';

    const googleDriveService = new GoogleDriveService(driveClientId, driveClientSecret, driveRedirectUri, driveRefreshToken);

    const finalPath = path.join(__dirname + `./../../public/editedVideos/${req.params.fileName}`);
    const folderName = 'Videos';

    if (!fs.existsSync(finalPath)) {
        throw new Error('File not found!');
    }

    let folder = await googleDriveService.searchFolder(folderName).catch((error) => {
        console.error(error);
        return null;
    });

    if (!folder) {
        folder = await googleDriveService.createFolder(folderName);
    }

    await googleDriveService.saveFile('SpaceX', finalPath, 'video/mp4', folder.id).catch((error) => {
        console.error(error);
    });

    console.info('File uploaded successfully!');

    // Delete the file on the server
    //fs.unlinkSync(finalPath);
    res.send('ok');

};

exports.youtube = async (req, res) => {
    const userId = req.body.userId;
    const fileName = req.body.fileName;
    const finalPath = path.join(__dirname + `./../../public/client_secret.json`);

    fs.readFile(finalPath, (error, content) => {
        if (error) {
            console.log('Error loading client secret file: ' + error);
            return cb(error);
        }
        // Authorize a client with the loaded credentials
        authorize(JSON.parse(content), (err, auth) => {
            console.log('auth');
            console.log(auth)
            uploadVideo(
                auth, // which is the result of the authorize method, you need to call prior to this
                fileName,
                (error, videoID) => {
                    if (error) {
                        return console.error(error);
                    }
                    console.log('Success upload, video ID is ' + videoID);
                    const ytList = new YtVideoList({
                        userId,
                        url: 'https://www.youtube.com/watch?v=' + videoID
                    })
                    ytList.save(err => {
                        if (err) {
                            console.log(err)
                        } else {
                            res.status(httpStatus.CREATED).json('https://www.youtube.com/watch?v=' + videoID);
                        }
                    })
                }
            )
        });
    });
};






