const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1/codial_development');
const db=mongoose.connection;
db.on('error',console.error.bind('Error in connecting to MongoDB'));
db.once('open',function()
{
    console.log('Connected to the database :: MongoDB');
});
module.exports=db;