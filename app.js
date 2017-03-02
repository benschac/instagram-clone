const express = require('express');
const app = express();
const config = require('./config');
const uri = require('uri');


var ig = require('instagram-node').instagram();

// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.

ig.use({ access_token: config.ACCESS_TOKEN || process.env.ACCESS_TOKEN,
         client_id: config.CLIENT_ID || process.env.CLIENT_ID,
         client_secret: config.SECRET || process.env.SECRET });



app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');





app.get('/', (req, res) => {

  ig.user_self_media_recent((err, medias, pagination, remaining) => {
    if(err) console.error(err);


    res.render('pages/index', {grams: medias});
  })

});
// start the server on port 8080
app.listen(8080);
// send a message
console.log('Server has started!');


module.exports = app;