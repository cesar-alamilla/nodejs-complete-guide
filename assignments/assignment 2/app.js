const express = require('express');

const app = express();

app.use((request, response, next) =>{
  console.log("Middleware 1");
  next();
});

app.use((request, response, next) =>{
  console.log("Middleware 2");
  next();
});

app.use('/users', (request, response, next) =>{
  console.log("on users route");
  response.send('<h1>No users!</h1>');
});

app.use('/', (request, response, next) =>{
  console.log("in the defualt middleware");
  response.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);