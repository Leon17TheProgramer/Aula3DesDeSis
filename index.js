const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;

const app = express();

app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

app.get('/',(req, res)=>{
    res.render('home');
});
app.get('/about',(req, res)=>{
    /*const name = 'Leon';
    const age = 18;
    const hobby = 'Desenhar no Canva';*/

    const dados = {
        name: 'Leon',
        age: 18,
        hobby: 'Desenhar no Canva'
    };

    res.render('about',{dados});
});
app.get('/store',(req, res)=>{
    res.render('store');
});
app.get('/extra',(req, res)=>{
    const coisas = ['coisa1',' coisa2',' coisa3',' bagulho1',' coisa4',' coisa5',' coisa6',' coisa7',' coisa8'];
    res.render('extra',{coisas});
});

app.listen(port,()=>console.log(`Servidor Iniciado: http://localhost:${port}`));