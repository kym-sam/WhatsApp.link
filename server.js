const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'server')));

app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server running => http://localhost:${PORT}`);
});