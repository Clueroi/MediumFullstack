import { app } from '../app'
import { FetchWeekPendingGoalsUseCase } from '../use-cases/fetch-week-pending-goals'
import { CreateGoal } from './controllers/create-goal'
import { CreateGoalCompletion } from './controllers/create-goal-completion'

export async function Route() {
  app.post('/goal', CreateGoal)
  app.post('/completion', CreateGoalCompletion)

  app.get('/goal-completion', FetchWeekPendingGoalsUseCase)
}
