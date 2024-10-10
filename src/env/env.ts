import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('❌ Invalid Environment Variables')

  throw new Error('Invalid Environment Variables')
}

export const env = _env.data
