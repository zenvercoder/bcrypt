const bcrypt = require('bcrypt');

// this causes code to break until you set up knex
// const user - require('../db/user');

// bcrypt.genSalt(10)

bcrypt.genSalt(12, (err, salt) => {
  // console.log('salt: ', salt);
    bcrypt.hash('undecillion chinchillas', salt, (err, hash) =>{
      console.log('hash: ', hash);

      // literally store the entire thing in db
      // {password: hash}
      // user('user').insert({password: hash});
        // Store hash in your password DB.
    });
});

bcrypt.compare('undecillion chinchillas', '$2a$12$SlJsxpD1Yrk38jJe6HPVB.uQ3CNTBW0Ecp2kGMWnZFSPaL0ICCPMK',  (err, isMatch) => {
  console.log('is a match: ', isMatch);
});

// bcrypt.compareSync(myPlaintextPassword, hash);
