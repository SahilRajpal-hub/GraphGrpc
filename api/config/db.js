const mongoose = require("mongoose");
const MONGO_URI = 'mongodb://127.0.0.1:27017/ems-dashboard-be'

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`Mongo Db connected to ${conn.connection.port}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDb