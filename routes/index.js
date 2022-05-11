const route= require('express').Router();


route.get('/old', (req,res)=>{
    res.render('index')
});

route.get('/', (req,res)=>{
    res.render('index-safari')
});


module.exports = route;