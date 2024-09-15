'use strict'
const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/admin', (req, res) => {
    res.render('admin')
})


const PORT = 1233
app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`)
})
