import aboutSchema from '../models/about.model'

export default defineEventHandler(async (event) => {
  const res = await aboutSchema.find()
  return res
})
