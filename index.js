const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const arr = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const singleItem = arr.find(u => u.id === userId);
    res.send(singleItem);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})