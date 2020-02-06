const mongoose = require('mongoose');

// Connecting to db
mongoose.connect('mongodb://localhost:27017/gamedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to game db...'))
    .catch(err => console.log(`Error connecting to db: ${err}`));

module.exports.Game = require('./game');