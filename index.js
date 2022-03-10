const express = require('express');
const routes = require('./routes/blog')


const app = express();

app.use(express.json());

//add middleware here
app.use('/', routes);


app.listen(3000, () => {
    console.log('listening on port 3000');
})


