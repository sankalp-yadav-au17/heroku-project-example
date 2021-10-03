const express = require ('express')
const app = express ()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const {MongoClient, ObjectId} = require('mongodb')
const db_url = `mongodb+srv://queue_app:NnlgQuYNSTOEbv1f@cluster0.zu8fe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(db_url)

// async function init(){
//     await client.connect()
//     db = client.db('queue_app')
// }
// init()

app.get("/queue",async(req,res)=>{
    console.log("reached here");
    res.sendFile(`${__dirname}/queue_heroku.html`)
})


console.log(`heroku port is ${process.env.PORT}`);
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT} port`);
})


// https://heroku-exaple-app.herokuapp.com/queue