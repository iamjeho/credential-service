const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
  fs.readFile('user_public/index.html', 'utf-8', (err, data) => {
    if(err) { res.send('No Such File of Directory') }
    res.send(data)
  })
})

app.get('/qrcode', (req, res) => {
  fs.readFile('public/qrcode.png', (err, data) => {
    if(err) { res.send() }
    res.send(data)
  })
})

app.listen(3030)