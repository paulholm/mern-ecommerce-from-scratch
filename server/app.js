import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'

import connectDB from './config/database.js'
import env from './config/environment.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import { orderRoutes, productRoutes, userRoutes, uploadRoutes } from './routes'

dotenv.config()
connectDB()

const app = express()

if (env.node_env === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(env.paypal_client_id))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (env.node_env === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.use(notFound)
app.use(errorHandler)

app.listen(
  env.port,
  console.log(`Server running in ${env.node_env} mode on Port ${env.port}`)
)
