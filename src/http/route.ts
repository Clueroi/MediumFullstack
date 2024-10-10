import { app } from '../app'
import { CreateGoal } from './controllers/create-goal'

export async function Route() {
  app.post('/goal', CreateGoal)
}
