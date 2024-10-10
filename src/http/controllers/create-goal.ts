import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { createGoal } from '../../use-cases/create-goal'

export async function CreateGoal(request: FastifyRequest, reply: FastifyReply) {
  const createGoalSchema = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
  })

  const { title, desiredWeeklyFrequency } = createGoalSchema.parse(request.body)

  try {
    await createGoal({
      title,
      desiredWeeklyFrequency,
    })
  } catch (err) {
    reply.status(400).send({ message: 'Invalid data' })
  }
}
