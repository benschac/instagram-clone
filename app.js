const express = require('express');
const app = express();
// const config = require('./config');


// var ig = require('instagram-node').instagram();

// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.
// console.log("process: ", process.env.ACCESS_TOKEN,'afs')
// console.log('insta: ',ig,  process.env.ACCESS_TOKEN);
// ig.use({ access_token: process.env.ACCESS_TOKEN,
//          client_id: process.env.CLIENT_ID,
//          client_secret: process.env.SECRET });



// app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');





app.get('/', (req, res) => {

  // ig.user_self_media_recent((err, medias, pagination, remaining) => {
  //   if(err) console.error(err);


    res.render('pages/index');


});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port: ', app.get('port'));
})


// module.exports = app;
