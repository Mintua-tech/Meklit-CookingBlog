const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongodb_uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected')
});


require('./category');
require('./recipe');