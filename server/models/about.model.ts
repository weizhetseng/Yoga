import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  imgURL: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
})

const aboutSchema = mongoose.model('about', schema)

export default aboutSchema
