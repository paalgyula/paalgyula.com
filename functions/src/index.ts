import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import * as express from "express";
import * as cors from "cors";
import { getData } from "./imageData";
import { getTutorials } from "./api/tutorials";

admin.initializeApp(functions.config().firebase);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.get("/api/tutorials", getTutorials);
app.all("*", (req, res) => {
  functions.logger.warn(
    `api has been invoked but no handler registered for: ${req.url}`
  );
  res.json({ message: "this function is not handled by any handlers" });
});

export const api = functions.https.onRequest(app);

const db = admin.firestore();

export const profileImage = functions.https.onRequest(async (req, res) => {
  // Save it into firebase
  await db.collection("visits").add({
    headers: req.headers,
    userAgent: req.headers["user-agent"] || "",
    ip: req.ip || "",
    ips: req.ips || [],
  });

  const img = getData();

  res
    .writeHead(200, {
      "Content-Length": Buffer.byteLength(img),
      "Content-Type": "image/png",
    })
    .write(img);
});
