import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  imgURL: {
    type: String,
  },
  name: {
    type: String,
  },
  years: {
    type: Number,
  },
  content: {
    type: String,
  },
})

const teacherSchema = mongoose.model('teacher', schema)

export default teacherSchema
