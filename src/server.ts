import { app } from './app'

app
  .listen({
    port: 3434,
  })
  .then(() => console.log('Server Running'))
