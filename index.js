const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


app.post('/GetAnswer',function(req,res) {
  // console.log("first succseed",req.body.message);
  let message = req.body.message + " from server";
    res.send({serverMessage:message});
});

app.listen(port, () => console.log(`Listening on port ${port}`));