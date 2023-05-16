const { render } = require('ejs');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);


app.get('/',(req, res)=>{
    
    const countries = ['India','Japan','Russia','China','Nepal','USA','Germany','South Africa','France','Finland','Cuba'];

    res.render('index', { countries });

})