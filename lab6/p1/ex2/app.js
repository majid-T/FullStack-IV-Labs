var express = require('express');
var app = express();

app.listen(3000);

const requestTime = (req,res,next)=>{
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);


app.get('/greet',(req,res)=>{
    console.log(`Get Recieved: ${req.requestTime}`);
    res.send('GET Call : Hello World!');
});

app.post('/greet',(req,res)=>{
    console.log(`Get Recieved: ${req.requestTime}`);
    res.send('POST Call : Hello World!');
});

app.put('/greet',(req,res)=>{
    console.log(`Get Recieved: ${req.requestTime}`);
    res.send('PUT Call : Hello World!');
});

app.delete('/greet',(req,res)=>{
    console.log(`Get Recieved: ${req.requestTime}`);
    res.send('DELETE Call : Hello World!');
});