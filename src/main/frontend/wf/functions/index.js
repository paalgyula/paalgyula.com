const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.bigben = functions.https.onRequest((req, res) => {
    if (req.method == 'POST')
        console.error('POST method received');

    const hours = (new Date().getHours() % 12) + 1 // london is UTC + 1hr;
    res.status(200).json({ success: true, bong: hours });
    // res.status(200).send(`<!doctype html>
    //   <head>
    //     <title>Time</title>
    //   </head>
    //   <body>
    //     ${'BONG '.repeat(hours)}
    //   </body>
    // </html>`);
});
