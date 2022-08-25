// const { response, request } = require('express')
const express = require('express')
var getrouter=require("./get")
const app = express()
app.use(getrouter)
app.listen(9000, () => {
    console.log("listening on the port", 9000)
})