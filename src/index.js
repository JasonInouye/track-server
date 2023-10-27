require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://jasoninouye:MyPassword@cluster0.iu1bjej.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri, mongoose.connect(mongoUri));

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connection to Mongo', err )
})

app.get('/', (req, res) => {
    res.send('Hi There!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});