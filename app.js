const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    })
    .then(() => {
        console.log('Database Connected!');
    }).catch((err) => {
        console.log(`Errot connect to database because = ${err}`);
        process.exit();
    });

// PORT
const PORT = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Hello');
});

require('./app/routes/post.routes')(app);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});