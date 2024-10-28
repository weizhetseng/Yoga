import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  imgURL: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  content: {
    type: String,
  },
})

const planSchema = mongoose.model('plan', schema)

export default planSchema
