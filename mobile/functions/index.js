const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid')
const { Storage } = require('@google-cloud/firestore')
const storage = new Storage({
    projectId: 'cloneinstagram-afa2f',
    keyFilename: 'key.json'
})



exports.uploadImage = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
