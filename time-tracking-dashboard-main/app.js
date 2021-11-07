const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


//To use static files
app.use('/public', express.static('public'));

//Allow CORS
app.use(cors());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`)
});



module.exports = app;
