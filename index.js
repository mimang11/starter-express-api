const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get('/getUser', (req, res) => {
    console.log("Just got a request!")
    res.send('当前没有任何数据!')
})
app.listen(process.env.PORT || 3000)
