const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const eLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(eLayout)
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.get('/home' , (req ,res ,next) => {
    res.render('home')
})

app.get('/sp', (req , res, next) => {
    res.render('sp')
})
app.get('/product', (req , res, next) => {
    res.render('product')
})
app.get('/admin', (req , res, next) => {
    res.render('admin')
})
app.get('/contact', (req , res, next) => {
    res.render('contact')
})
app.get('/change-product', (req , res, next) => {
    res.render('change-product')
})
app.listen(port, () => {
    console.log(`Dang chay web tai http://localhost:${port}`)
})