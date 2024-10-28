import mongoose from 'mongoose'

export default async (_nitroApp: any) => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect('mongodb://127.0.0.1:27017/WEBAPI')
    console.log('mongodb connected')
  } catch (error) {
    console.log(error)
  }
}
