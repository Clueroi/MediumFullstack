import dayjs from 'dayjs'
import { client, db } from '.'
import { goals, goalsCompletions } from './schema'

async function seed() {
  await db.delete(goalsCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 6 },
      { title: 'Me exercitar', desiredWeeklyFrequency: 6 },
      { title: 'Programar', desiredWeeklyFrequency: 6 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalsCompletions).values([
    { goalID: result[0].id, createdAt: startOfWeek.toDate() },
    { goalID: result[0].id, createdAt: startOfWeek.add(1, 'day').toDate() },
  ])
}

seed().finally(() => {
  client.end()
})
