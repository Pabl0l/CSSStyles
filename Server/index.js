const sequelize = require('./src/db/db.js');
const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser');
const router = require('./src/routes/routes.js')
const upload = require('./src/controllers/multer.js')
const server = express()
const port = 3001

server.use(cors())

server.set('view engine','ejs')

server.use(bodyParser.json());

server.use(
    express.urlencoded({
        extended: true
    })
)

server.use(
    express.json({
        type: "/"
    })
)


server.use(express.json())

server.use(router)

const main = async () =>{
    try {
        await sequelize.sync()
        await server.listen(port,()=>{
            console.log(`listening on port http://localhost:${port}` )
        })
    } catch (errr) {
        console.log(`Error: ${errr}` )
    }
}

main();