const express = require ('express')
const app = express ()

app.get('/',(req,res)=>{
    res.send(`Server is working. yo`)
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT} port`);
})