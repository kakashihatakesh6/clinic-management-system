const connectToMongo = require("./db");
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
// app.use('/', (req, res) => {
//     res.json({message: "Hello from server!"});
// });
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reports', require('./routes/reports'));

app.listen(PORT, () => {
    console.log(`We are listening on port http://localhost:${PORT}`);
});

module.exports = app;



