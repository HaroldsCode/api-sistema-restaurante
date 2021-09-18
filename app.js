require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

const dataBase = require('./settings/mongo');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', require('./app/routes/index'))

app.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Url Not found' })
})

dataBase();
app.listen(port, () => console.log(`http://localhost:${port}/`))
