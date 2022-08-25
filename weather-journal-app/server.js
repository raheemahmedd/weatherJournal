// Setup empty JS object to act as endpoint for all routes
let projectData = {};


// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//     res.send('server is on');
//   });
/* Dependencies */


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port =8000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

app.post('/addWeather',(req,res)=>{
   
  const  {newDate,temp,feelings}=req.body
  projectData.date=newDate;
  projectData.temp=temp;
  projectData.feelings=feelings;
 
  
   res.end();

});
app.get('/getWeather',(req,res)=>{
  res.send(projectData);
});

