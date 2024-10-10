import fastify from 'fastify'
import { Route } from './http/route'

export const app = fastify()

app.register(Route)
