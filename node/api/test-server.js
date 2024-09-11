import express from 'express'

const app = express()

app.get('/users', (request, response) => {h
    response.send('OK')
})

app.listen(3000) //listen(Número de Porta) --> Determina a comunicação com a porta

//app.post('/users') --> Criar novo Usuário
//app.put('/users') --> Editar vários Usuários
//app.delete('/users') --> Deletar Usuário

/*
    Necessidades das Rotas:

        1) Tipo de rota - Método HTTP
        2) Endereço - Caminho da rota
        3)
*/