import * as admin from "firebase-admin";
import * as functions from "firebase-functions/v2";

import * as cors from "cors";
import * as express from "express";
import { getTutorials } from "./api/tutorials";
import { getData } from "./imageData";

admin.initializeApp();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.get("/api/tutorials", getTutorials);
app.all("*", (req, res) => {
  functions.logger.error(
    `api has been invoked but no handler registered for: ${req.url}`
  );
  res.json({ message: "this function is not handled by any handlers" });
});

export const api = functions.https.onRequest(app);

const db = admin.firestore();

export const profileImage = functions.https.onRequest(async (req, res) => {
  const img = getData();

  res
    .writeHead(200, {
      "Content-Length": Buffer.byteLength(img),
      "Content-Type": "image/png",
    })
    .write(img);

  const userAgent = req.headers["user-agent"] || "";

  // Save the request into firebase
  db.collection("visits")
    .add({
      headers: req.headers,
      userAgent,
      ip: req.ip || "",
      ips: req.ips || [],
    })
    .then(() => {
      functions.logger.info(
        `Profile image visited from: ${req.ip} - ${userAgent}`
      );
    });
});
