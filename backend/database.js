const mongoose=require('mongoose');
const URI = 'mongodb+srv://ariel:ariel@cluster0.tiawjmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));
module.exports=mongoose;