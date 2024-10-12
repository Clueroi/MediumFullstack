import { app } from '../app'
import { FetchWeekPendingGoalsUseCase } from '../use-cases/fetch-week-pending-goals'
import { CreateGoal } from './controllers/create-goal'

export async function Route() {
  app.post('/goal', CreateGoal)
  app.get('/goal-completion', FetchWeekPendingGoalsUseCase)
}
