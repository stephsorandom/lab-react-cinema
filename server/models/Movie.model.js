
const Movie = mongoose.model('Movie', new Schema ({
  title: String,
  director: String,
  stars: [''],
  image: String,
  description: String,
  showtimes: ['']
}))