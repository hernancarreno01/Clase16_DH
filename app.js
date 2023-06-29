const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ${port}');
});
app.get('/404', (req, res) => {
  res.send('Error página no encontrada');
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
