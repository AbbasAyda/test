const mongoose = require('mongoose') 
console.clear()

// Creating a Database
mongoose.connect('http://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const movieSchema = new mongoose.Schema({
    movieName : String,
    director: String,
    imdbRating: Number,
    cast: [String],
    releaseDate: Date,
    genre: String,
    sequel: Boolean
});

const movieClass = mongoose.model('movieClass', movieSchema);
module.exports = movieClass
