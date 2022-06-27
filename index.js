const express = require('express');
const routes = require('./routes/mark')
const cors = require("cors");



const app = express();

app.use(
    cors()
  );
  
app.use(express.json());

app.use('/', routes);


app.listen(8800, () => {
    console.log('listening on port 8800');
})


