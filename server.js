const express = require('express');
const app = express();
// const config = require('./config');
const url = require('url');


var ig = require('instagram-node').instagram();

// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.

ig.use({ access_token: proccess.ENV.ACCESS_TOKEN,
         client_id: proccess.ENV.CLIENT_ID,
         client_secret: proccess.ENV.SECRET });



app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



let redirect_uri;

app.get('/', (req, res) => {
  redirect_uri = req.baseUrl;

  ig.user_self_media_recent((err, medias, pagination, remaining) => {
    if(err) console.error(err);


    res.render('pages/index', {grams: medias});
  })

});
// start the server on port 8080
app.listen(8080);
// send a message
console.log('Server has started!');
