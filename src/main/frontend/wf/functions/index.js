const functions = require('firebase-functions');

exports.bigben = functions.https.onRequest((req, res) => {
    if (req.method == 'POST')
        console.error('POST method received');

    const hours = (new Date().getHours() % 12) + 1 // london is UTC + 1hr;
    //res.status(200).json({ success: true, bong: hours });
    res.status(200).send(`<!doctype html>
      <head>
        <title>Time</title>
      </head>
      <body>
        ${'BONG '.repeat(hours)}
      </body>
    </html>`);
});

exports.experiences = functions.https.onRequest((req, res) => {
    res.status(200).json([{
        workplace: {
            image: 'blackrock-logo.png',
            location: {
                href: 'https://www.google.hu/maps/place/Duna+Tower+Irodah%C3%A1z/@47.5349502,19.0573418,17z/'
                    + 'data=!3m1!4b1!4m5!3m4!1s0x4741dbe6475d053b:0x24f1fd1da920b683!8m2!3d47.5349502!4d19.0595305',
                title: 'XIII. Budapest - Duna Tower'
            },
            title: 'BlackRock'
        },
        meta: {
            time: '2017.07 - ',
            title: 'Senior Associate',
            description: 'Full stack development using Angular 4 and Spring frameworks'
        }
    }]);
});
