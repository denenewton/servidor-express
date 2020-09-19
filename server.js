const express = require('express')
const server = express()

server.get('/', (req, rep) => {
     rep.send('<h1>HOME</h1>')
})
server.get('/contato', (req,rep) => {
    rep.send(`
    <h1>Contato:</h1>
    <form action="/contato" method="POST">
        <input type="text" name="txt" id="txt">
        <input type="submit" value="Enviar">
    
    </form> 
    `)
})
server.post('/contato', (req,rep) => {
     rep.send('Dados enviados com sucesso!')
})

server.listen(3001, () => {
    console.log('Servidor está escutando em http://localhost:3001')
    console.log('Pra desliga-lo: ctrl+c')
});