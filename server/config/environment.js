import dotenv from 'dotenv'

dotenv.config()

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  mongoDB: process.env.MONGO_URI,
  paypal_client_id: process.env.PAYPAL_CLIENT_ID,
}
