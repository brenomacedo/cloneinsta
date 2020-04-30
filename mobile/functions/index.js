const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'cloneinstagram-afa2f',
    keyFilename: 'key.json'
})



exports.uploadImage = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        try{
            fs.writeFileSync('./tmp/imageToSave.jpg', req.body.image, 'base64')
            const bucket = storage.bucket('cloneinstagram-afa2f.appspot.com')
            const id = uuid()
            bucket.upload('/tmp/imageToSave.jpg', {
                uploadType: 'media',
                destination: `posts/${id}.jpg`,
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }
                }
            }, (err, file) => {
                if(err) {
                    console.log(err)
                    return res.status(500).json({ err })
                } else {
                    const filename = encodeURIComponent(file.name)
                    const imageURL = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${filename}?alt=media&token=${id}`
                    return res.status(201).json({ imageURL })
                }
            })


        }catch(err){
            console.log(err)
            return res.status(500).json({error: err})
        }
    })
})
