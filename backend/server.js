import express from "express"
import "dotenv/config"

const app = express()
const porta = process.env.PORT
const teste = process.env.PIADA

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})