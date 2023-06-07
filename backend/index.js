const express = require("express");
const cors=require("cors")
const PORT = 4000;
const connectDB=require("./config/db")
const Data=require("./models/DataSchema")
const app = express();
connectDB();
app.use(cors())

app.use('/api',require('./routes/dataroutes'))
app.get('/',(req,res)=>{
    res.send('HELLO');
});

Data.find({"topic":"oil"})
  .then(data => {
    console.log('Data from MongoDB:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error listening to ${PORT}`);
  } else {
    console.log("Server Started Successfully");
  }
});
