import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB ok!'))
  .catch((err) => console.log('DB Err', err));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Giorgi sss');
});

app.post('/auth/login', (req, res) => {
  console.log(req.body);

  const token = jwt.sign(
    {
      name: 'giorgi',
      email: req.body.email,
    },
    'secret123',
  );
  res.json({
    success: true,
    token,
  });
});
app.listen(8000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server ok!');
});
