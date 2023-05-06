const mongoose = require("mongoose");

const url = "mongodb+srv://c2gupt:7uCiuXTPM67v5Kes@cluster1.ggpvp8w.mongodb.net/?retryWrites=true&w=majority"

  const connect=()=>{
      mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
      }).then( ()=>{
            console.log("This db is sucesfully connected");
      }).catch((e)=>{
            console.log(e);
      })
}

module.exports = {connect}