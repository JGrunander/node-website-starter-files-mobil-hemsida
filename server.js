const express = require('express');
const app = express();
const path = require('path')

app.use('/assets',express.static(__dirname + '/assets'));

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
  app.get('/', (req, res) => {
   console.log('hitserver');
    res.sendFile(path.join(__dirname + '/index.html'));
  });

