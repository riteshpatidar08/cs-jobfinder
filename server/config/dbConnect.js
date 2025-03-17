import mongoose from 'mongoose'
const dbConnect = async() => {
    try {
         const connection = await mongoose.connect('mongodb://localhost:27017/finder-job')
         console.log('Database is connected')
    } catch (error) {
        console.log(error.message)
    }
   
}

// module.exports = dbConnect

export default dbConnect