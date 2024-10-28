import teacherSchema from '../models/teacher.model'

export default defineEventHandler(async (event) => {
  const res = await teacherSchema.find()
  return res
})
