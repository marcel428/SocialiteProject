const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const readline = require('readline');
const OAuth2 = google.auth.OAuth2;
const service = google.youtube('v3');
// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/upload_app_session.json
const SCOPES = [
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/youtube.readonly'
];
const TOKEN_DIR =
    (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) +
    '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'upload_app_session.json';

const authorize = (credentials, cb) => {
    const clientSecret = credentials.web.client_secret;
    const clientId = credentials.web.client_id;
    const redirectUrl = credentials.web.redirect_uris[0];
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (error, token) => {
        if (error) {
            return getNewToken(oauth2Client, cb);
        } else {
            oauth2Client.credentials = JSON.parse(token);
            return cb(null, oauth2Client);
        }
    });
};

const getNewToken = (oauth2Client, cb) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the code from that page here: ', code => {
        rl.close();
        oauth2Client.getToken(code, (error, token) => {
            if (error) {
                return cb(
                    new Error(
                        'Error while trying to retrieve access token',
                        error
                    )
                );
            }
            oauth2Client.credentials = token;
            storeToken(token);
            return cb(null, oauth2Client);
        });
    });
};

const storeToken = token => {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (error) {
        if (error.code != 'EEXIST') {
            throw error;
        }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), error => {
        if (error) throw error;
        console.log('Token stored to ' + TOKEN_PATH);
    });
};
const uploadVideo =async (auth,fileName, cb) => {
    const finalPath = path.join(__dirname + `./../../../public/editedVideos/${fileName}`);
    service.videos.insert(
        {
            auth: auth,
            part: 'snippet,contentDetails,status',
            resource: {
                // Video title and description
                snippet: {
                    title: 'My title',
                    description: 'My description'
                },
                // I set to private for tests
                status: {
                    privacyStatus: 'public'
                }
            },

            // Create the readable stream to upload the video
            media: {
                body: fs.createReadStream(finalPath) // Change here to your real video
            }
        },
        (error, data) => {
            if (error) {
                return cb(error);
            }
            console.log('https://www.youtube.com/watch?v=' + data.data.id);
            return cb(null, data.data.id);
        }
    );
};


module.exports = { authorize,uploadVideo };