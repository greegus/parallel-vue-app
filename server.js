const path = require('path')
const express = require('express')
const lodash = require('lodash-express')
const serveStatic = require('serve-static')

const app = express()
const port = 8081

lodash(app, 'html')

app.set('views', path.join(__dirname, '/dist'));
app.set('view engine', 'html')

app.get('/', (req, res) => {
  res.render('index', {
    APP_DATA: JSON.stringify({artist: 'maroonId'})
  })
})

app.use(serveStatic(path.join(__dirname, '/dist')))

app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})