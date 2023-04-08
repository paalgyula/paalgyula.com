# Firebase fullstack app

This application is based on 3 parts: 
 - Frontend (next.js, chakra)
 - Backend (firebase serverless with node@18 backend and express.js)
 - Admin (vite,react-ts,firebase)

Yes, my page contains `/profile-image.png` which is a tracking picture, and logs visits to the firebase database. It has been used on my email signature

*I ❤️, and can't stop hacking, sorry!*

OFC you can use this site for your ideas.

TODOs:
 - create admin page for tutotirals
 - refactor jsx based tutorials to firestore based
 - create next static rendered tutorials section (based on firestore data)
 - create admin page for modifying sections on a CV page)
 - create Pub/Sub based trigger for visits and post it to a slack channel
    1. Create onCreate trigger on visits collection
    2. Lookup location based on GeoIP
    3. Send a message to a slack channel
    4. Set TTL on visit entry
 - Refactor page look&feel
 - Create PDF exportable page (CV)
 - Create wizzard for "HIRE ME" instead of just a plain link

 Made with ❤️ by Paal Gyula - <paalgyula@paalgyula.com>