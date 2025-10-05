const mongoose = require('mongoose');

const mongo_url= process.env.MONGO_CON;
mongoose.connect(mongo_url)
.then(()=>{
console.log("mognoDb is connected");
})
.catch((err)=>{
 console.log("mognoDb connection error",err);
})


