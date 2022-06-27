const express = require('express');
const routes = require('./routes/mark')


const app = express();

app.use(express.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//add middleware here
app.use('/', routes);


app.listen(8800, () => {
    console.log('listening on port 8800');
})


