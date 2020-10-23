const express = require('express')
require('dotenv').config()
const cors = require('cors')
require('./config/db')
const app = express()
const router = require('./routes/routes')
const fileUpload = require('express-fileupload')
const path = require('path')
const port = process.env.PORT
host = process.env.HOST || '0.0.0.0'

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static('client/img'))

if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/image'))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname+'/client/build/index.html'))
	})
}


app.use('/api', router)

app.listen(port, host, ()=> console.log("server listening on port" + port))