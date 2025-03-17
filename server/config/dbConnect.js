import mongoose from 'mongoose'
import config from '../config/config.js'
const dbConnect = async() => {
    try {
         const connection = await mongoose.connect(config.db.MONGODB_URI)
         console.log('Database is connected')
    } catch (error) {
        console.log(error.message)
    }
   
}

// module.exports = dbConnect

export default dbConnect