# baidahocpas

The main public website for Bennett & Associates, CPAs.

## TODO:

- Logging

## Dependencies

- [body-parser](https://www.npmjs.com/package/body-parser)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [debug](https://www.npmjs.com/package/debug)
- [express](https://www.npmjs.com/package/express)
- [firebase](https://www.npmjs.com/package/firebase)
- [jade](https://www.npmjs.com/package/jade)
- [morgan](https://www.npmjs.com/package/morgan)

## Firebase

The database connection config is in `/config/db.js`. The file should look like this:

```javascript
// /config/db.js

module.exports = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>.firebaseapp.com",
  databaseURL: "https://<YOUR-DATABASE-URL>.firebaseio.com",
  storageBucket: "<YOUR-STORAGE-BUCKET>.appspot.com",
  messagingSenderId: "<YOUR-MESSAGE-SENDER-ID>"
};
```

## Auth

Authentication is done through Firebase auth. Currently, the only configured auth method is [email/password](https://firebase.google.com/docs/auth/web/password-auth). Auth can be found in [`/routes/auth`](/routes/auth).

## Logs

The application logs events dealing with users (authentication attempts, data editing, etc.) to the Firebase database at `/logs`.
