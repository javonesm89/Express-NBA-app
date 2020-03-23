const express = require("express")
const app = express()

const https = require("https")

app.get("/",function(req,res){
    const url = "https://free-nba.p.rapidapi.com/teams/"
    const options = {
        'method': 'GET',
        'hostname': 'free-nba.p.rapidapi.com',
        'path': '/teams/',
        'headers': {
          'x-rapidapi-key': '9d0a8a59ecmsh876c5a995de3f7ep135911jsncf17dc72e8f6'
        },
        'maxRedirects': 20
      };
    https.get(url,options,function(response){
        response.on("data",function(data){
            console.log(data)
        })
    })
    // res.send("Working on NBA page!")
})

app.listen(3000,function(){
    console.log("running on 3000.")
})

// API key 9d0a8a59ecmsh876c5a995de3f7ep135911jsncf17dc72e8f6