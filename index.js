const express = require('express');
const db = require('./config/mongoose');
const router = require('./router');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);


db
.then(() => {
app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message))