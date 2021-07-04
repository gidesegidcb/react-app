const express=require('express');
const app=express();
const router=require('./Router/Router')
const createError=require('http-errors')
const bodyParser = require('body-parser');
require('dotenv/config')
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/',router)
app.use((req, res, next)=> {
    return next(createError(404,"This page is not available."))
});
app.use((err, req, res, next)=> {
    const statusCode=err.statusCode || 500;
    res.status(err.statusCode || 500)
    res.send(
           `
           <html>
           <title>Error message  from localhost:3001</title>
           <header>
           <style>
           .errorPage{
                  margin-top:100px;
                  margin-left:100px;
                  margin-right:30px;
                  margin-bottom:30px;
           }
           </style>
           </header>
           <body>
             <div class="errorPage">
                  <h3>Sorry, this page is not available</h3>
                  <p>${err.message}</p>
                  <p>Status code:${err.status}</p>
                  <div>
                  <button onClick="backToHomePage()">Back</button>
              </div>
             </div>
           <script>
            function backToHomePage(){
                   window.location.href="/"
            }
           </script>
           </body>
           </html>
           `
           )
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.listen(process.env.ServerPort,function(){
    console.log("server is running")
})