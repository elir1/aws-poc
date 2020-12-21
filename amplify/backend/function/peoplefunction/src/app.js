// from REST API + DynamoDB template
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()
// var cors = require('cors') // ADDED - for avoiding CORS in local dev
// app.use(cors())  // ADDED - for avoiding CORS in local dev

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
/* 1. Import the AWS SDK and create an instance of the DynamoDB Document Client */
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient();

/* 2. create a function that will generate a unique ID for each entry in the database */
function id () {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/* 3. Update the app.get request with the following code for reading all contacts */
app.get('/people', function(req, res) {
  var params = {
    TableName: "devnir-components"// TODO: UPDATE THIS WITH THE ACTUAL NAME OF THE FORM TABLE ENV VAR (set by Amplify CLI)
  }
  docClient.scan(params, function(err, data) {
    if (err) res.json({ err })
    else res.json({ data })
  })
});

/* 4. Update the app.post request with the following code for creating a new contact */
app.post('/people', function(req, res) {
  var params = {
    TableName : process.env.STORAGE_PEOPLE_NAME, // TODO: UPDATE THIS WITH THE ACTUAL NAME OF THE FORM TABLE ENV VAR (set by Amplify CLI)
    Item: {
      id: id(),
      name: req.body.name,
      job: req.body.job
    }
  }
  docClient.put(params, function(err, data) {
    if (err) res.json({ err })
    else res.json({ success: 'Contact created successfully!' })
  })
});

// from REST API + DynamoDB template
app.listen(3000, function() {
    console.log("App started")
});

module.exports = app