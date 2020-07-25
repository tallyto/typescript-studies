import express from 'express'

const app = express()


const PORT = 3000
app.listen(PORT, (_)=>{
  console.log(`server running at => http://localhost:${PORT}`)
})