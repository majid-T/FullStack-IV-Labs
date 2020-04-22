const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
// const UserModel = require('./models/model');

let atlasConnectionString = 'mongodb+srv://MajidMongoUser:Mongo2146@cluster0-o3pt4.azure.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(atlasConnectionString, { useMongoClient : true });
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

app.use( bodyParser.urlencoded({ extended : false }) );

//for CORS
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
  next();
});

// routes to the end points...
// For signup users
const routes = require('./routes/routes');
app.use('/', routes);

// Only authenticated users
const secureRoute = require('./routes/secure-route');
app.use('/secure-nodes', passport.authenticate('jwt', { session : false }), secureRoute );

//public routes
const chatLogs = require('./routes/chat-logs');
// app.use('/logs',chatLogs);
app.use('/logs',passport.authenticate('jwt', { session : false }),chatLogs)

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

//Starting server on server defined port or 3030
let port = (process.env.PORT || '3030');
app.listen(port, () => {
  console.log('Chat-log backend Server started')
});