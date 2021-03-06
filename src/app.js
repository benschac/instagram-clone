const express = require('express')

const app = express()


const ig = require('instagram-node').instagram()


ig.use({ access_token: process.env.ACCESS_TOKEN,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.SECRET })

// app.use(express.static(__dirname + '/public'))
app.set('port', (process.env.PORT || 5000))
app.use(express.static(`${__dirname}/public`))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  ig.user_self_media_recent((err, medias) => {
    if (err) throw err


    res.render('pages/index', { grams: medias })
  })
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port: ', app.get('port'))
})


// module.exports = app;
