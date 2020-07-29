const express = require('express');

const app = express();

app.use(express.static('./dist/PlaceBook'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/PlaceBook/'}),
);

app.listen(process.env.PORT || 4200);
