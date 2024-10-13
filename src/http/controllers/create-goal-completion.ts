import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { createGoalCompletionUseCase } from '../../use-cases/create-goal-completion'

export async function CreateGoalCompletion(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createGoalSchema = z.object({
    goalId: z.string(),
  })

  const { goalId } = createGoalSchema.parse(request.body)

  try {
    await createGoalCompletionUseCase({
      goalId,
    })
  } catch (err) {
    reply.status(400).send({ message: 'Invalid data' })
  }
}
