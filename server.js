const express = require('express')
const app = express()

app.use('/', express.static('app'))

// authentication
app.post('/api/login', function (req, res) {
    res.send('Test login')
})
app.put('/api/register', function (req, res) {
    res.send('Test register')
})
app.get('/api/isloggedin', function (req, res) {
    res.send('Test isLoggedin')
})
app.get('/api/doesuserexist', function (req, res) {
    res.send('Test doesuserexist')
})


// todo categories CRUD
app.get('/api/getcat', function (req, res) {
    res.send('Test Get categories')
})
app.put('/api/addcat', function (req, res) {
    res.send('Test add categories')
})
app.delete('/api/delcat/:catid', function (req, res) {
    res.send('Test del categories')
})
app.patch('/api/updatecat/:catid', function (req, res) {
    res.send('Test update categories')
})

// todo list CRUD
app.get('/api/gettodos/:catid', function (req, res) {
    res.send('Test the API')
})
app.put('/api/addtodo', function (req, res) {
    res.send('Test the API')
})
app.delete('/api/deltodo/:todoid', function (req, res) {
    res.send('Test the API')
})
app.patch('/api/updatetodo/:todoid', function (req, res) {
    res.send('Test the API')
})

app.listen(3000)