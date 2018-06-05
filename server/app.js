const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3004;
const app = express();
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => console.log('Server running on port', PORT));
