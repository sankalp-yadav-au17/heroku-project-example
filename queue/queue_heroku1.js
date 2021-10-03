const express = require ('express')
const app = express ()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const {MongoClient, ObjectId} = require('mongodb')
const db_url = `mongodb+srv://queue_app:NnlgQuYNSTOEbv1f@cluster0.zu8fe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(db_url)

async function init(){
    await client.connect()
    db = client.db('queue_app')
}
init()

app.post("/queue/",async(req,res)=>{
    console.log("comming from insomnia");
    console.log(req.body)
    const collection_ref = db.collection('details')
    const insert_result = await collection_ref.insertOne(req.body)
    res.json(insert_result)
})

app.get("/queue/",async(req,res)=>{
    const collection_ref = db.collection('details')
    const all_products = await collection_ref.find({}).toArray()
    res.json(all_products)
})

app.get("/queue/:uniqueId",async(req,res)=>{
    const collection_ref = db.collection('details')
    const one_product = await collection_ref.findOne({_id: new ObjectId(req.params.uniqueId)})
    res.json(one_product)
})

app.delete("/queue/:uniqueId",async(req,res)=>{
    const collection_ref = db.collection('details')
    const one_product = await collection_ref.deleteOne({"_id": new ObjectId(req.params.uniqueId)})
    res.json(one_product)
})

app.put("/queue/:uniqueId",async(req,res)=>{
    const collection_ref = db.collection('details')
    const updating = await collection_ref.updateOne({_id: new ObjectId(req.params.uniqueId)},{$set:req.body})
     res.json(updating)
})

console.log(`heroku port is ${process.env.PORT}`);
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT} port`);
})


// https://heroku-exaple-app.herokuapp.com/queue