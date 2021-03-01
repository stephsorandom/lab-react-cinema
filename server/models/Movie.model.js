const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const Movie = mongoose.model('Movie', new Schema ({
  title: String,
  director: String,
  stars: [''],
  image: String,
  description: String,
  showtimes: ['']
}))

module.exports = Movie