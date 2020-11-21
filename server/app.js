require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const clothesRouter = require('./routes/clothes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/clothes', clothesRouter);


app.listen(process.env.PORT || 3000);

module.exports = app;
