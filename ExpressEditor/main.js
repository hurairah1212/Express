// We can also use get instead of use 
// use is a middle ware taht use all the things


const express = require('express');
const app = express();
const port = 8080; 


app.use('/', (req, res,next) => {
    res.send('Hello, World!');
    const err= "Could not acess";
    next(err);
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


