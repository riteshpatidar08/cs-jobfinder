import dotenv from 'dotenv'

dotenv.config()

const config = {
    app : {
        PORT : process.env.PORT,
        JWT_SECRET : process.env.JWT_SECRET,
        JWT_EXPIRATION : process.env.JWT_EXPIRATION
    },
    db : {
        MONGODB_URI : process.env.MONGODB_URI
    }
}

export default config ;