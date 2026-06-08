import express from "express"

const app = express()

const porta = 3000

app.length()

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})