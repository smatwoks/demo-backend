const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/show', (req, res) => {
    res.send('My name is peddi reddy')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})