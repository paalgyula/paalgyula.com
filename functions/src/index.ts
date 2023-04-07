import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import * as express from "express";
import * as cors from "cors";
import { getData } from "./imageData";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: "*" }));

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const api = functions.https.onRequest(app);

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

export const profileImage = functions.https.onRequest(async (req, res) => {
    // Save it into firebase
    await db.collection('visits').add({
        headers: req.headers,
        userAgent: req.headers['user-agent'] || '',
        ip: req.ip || "",
        ips: req.ips || [], 
    })

    const img = getData();

    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(img),
        'Content-Type': 'image/png',
    }).write(img);
});
