// require related modules used in this project
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

//set template engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// use body parser
app.use(express.urlencoded({extended: true}))
// localhost:3000
app.get('/', (req, res)=>{
  res.render('index')
})

app.post('/', (req, res)=>{
  const options = req.body
  const password = generatePassword(options)
  res.render('index', {password: password, options: options})
})
// start and listen the server
app.listen(port, ()=>{
  console.log(`Express server is running on http://localhost:${port}`)
})



