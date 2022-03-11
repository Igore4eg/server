const express = require('express');
const { listen } = require('express/lib/application');
const app = express();
const port = 3000;
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use(cors({ origin: (origin, done) => done(null, false), }))

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})