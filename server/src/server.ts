import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  const users = [
    {name: 'Erick', age: 21},
    {name: 'Emily', age: 22}
  ]

  return res.json(users);
})

app.listen(3333);