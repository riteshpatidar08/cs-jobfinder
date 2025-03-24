import jwt from 'jsonwebtoken' ;

const jwt_secret_string = 'hello-this-secret'

const payload = {
    userId : 1 ,
    name : "ritesh",
    role : 'recruiter'
}

const token = jwt.sign(payload ,jwt_secret_string , {expiresIn : '24h'})

console.log(token)