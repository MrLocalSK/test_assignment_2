const express = require('express')
const app = express();
const request = require('request');
const port = 3000;
const url = "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees"

app.get('/', (req,res) => {
    res.send("API is working")
})


app.get('/employeeslist', (req,res) => {
    request(url,(err,response,body) => {
        if (err){console.log(err)}
        else{
            const OUTPUT = JSON.parse(body)
            res.send(OUTPUT)
        }
    })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});