const express = require ('express')
const app = express ()

app.get('/',(req,res)=>{
    res.send(`Server is working. yo`)
})

console.log(`heroku port is ${process.env.PORT}`);
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT} port`);
})