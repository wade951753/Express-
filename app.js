const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// 首頁 route
app.get('/', (req, res) => {
  res.render('index')
})


// About route
app.get('/about', (req, res) => {
  res.render('about')
})


// Portfolio route
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})


// Contact route
app.get('/contact', (req, res) => {
  res.render('contact')
})


// 監聽
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

