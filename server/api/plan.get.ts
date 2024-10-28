import planSchema from '../models/plan.model'

export default defineEventHandler(async (event) => {
  const res = await planSchema.find()
  return res
})
