/*
    Criar uma API de Usuários

    - Criar usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário


    MongoDB

    arthurschneider
    admin
*/

import { PrismaClient } from "@prisma/client";
import cors from 'cors';
import express from "express";

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors()) // LIBERAR QUALQUER IP PARA ACESSAR A API

app.post('/users', async (req, res) => { //Rota de Criação

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age!=undefined&&Number(req.body.age)
        }
    })
    
    res.status(201).json(req.body)
})

app.get('/users', async (req, res) => { //Rota de Listagem

    let users = []

    console.log(req)

    if(req.query != {}) {
        users = await prisma.user.findMany({
            where: {
                id: req.query.id,
                name: req.query.name,
                email: req.query.email,
                age: req.query.email==undefined?undefined:parseInt(req.query.age)
            }
        })
    }
    else {
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.put('/users/:id', async (req, res) => { //Rota de Edição
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) => { //Rota de Remoção
    await prisma.user.delete({
        where: { 
            id: req.params.id
        }
    })

    console.log(req)
    res.status(200).json({"mensage": 'Usuário deletado com sucesso'})
})

app.listen(3000, () => {console.log("Server is running")})