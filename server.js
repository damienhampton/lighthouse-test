const express = require('express');
const app = express();

app.use(express.static('static'));

app.use((req, res, next) => {
  console.log(req);
  next();
})

app.listen(process.env.PORT || 3000);