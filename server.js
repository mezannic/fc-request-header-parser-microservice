var express = require('express')
var app = express()
var useragent = require('express-useragent')

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
app.use(useragent.express())

app.get('*', function (req, res) {
    res.json({
        ipaddress: req.ip,
        language: req.get('Accept-Language'),
        software: req.useragent.os
    })
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Listening on port ' + process.env.PORT)
})