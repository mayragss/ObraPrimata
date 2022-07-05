const route= require('express').Router();


route.get('/', (req,res)=>{
    res.render('index')
});

route.get('/portfolio', (req,res)=>{
    res.download('Obra Primata.pdf')
});

route.get('*', (req,res)=>{
    res.render('index')
});

module.exports = route;