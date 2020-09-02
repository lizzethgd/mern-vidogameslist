const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 5500

const app = express();
require('dotenv').config();

// Serving static files in express
app.use(express.static('public'))

// Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.use(cors());

// Database setup
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => { console.log("Conected to mongoDB")});

// Routes Setup
app.use('/api/category', require('./routes/category'));
app.use('/api/videogame', require('./routes/videogame'));
app.use('/api/auth', require('./routes/auth'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

// Listen to Port
app.listen(port, () => {
  console.log(`Servidor de MERN videogameslist se esta ejecutando en el puerto ${port}`);
})