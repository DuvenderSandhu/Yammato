const mongoose = require("mongoose");
const uri=process.env.DB_URI
async function  connectToMongo(req,res,next){
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


}

module.exports= connectToMongo