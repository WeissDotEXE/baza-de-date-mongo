const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser=require('body-parser') 
const cors=require('cors');

app.use(cors());

require("dotenv/config");
app.use(bodyParser.urlencoded({
  extended: false
}));

const videoRoute=require('./routes/videos')

app.use('/videos',videoRoute);
app.get("/", (req, res) => {
  res.send("Youtube Home page");
});


//connect to mongodb 
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },
  () => {
    console.log("Connected to MONGODB");
  }
);

app.listen(5000);
