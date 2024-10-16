const path = require('path');
const express  = require('express');
const app  = express();

// set up handle bars engine
const handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars' , handlebars.engine);
app.set('view engine', 'handlebars');

//allow static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// set up port
app.set('port',process.env.PORT || 3000);

app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/about',(req,res)=>{
    res.render('about')
});




// custom 404 page
app.use((req,res ,next)=>{
    res.status(404);
    res.render('404')
});

// custom 500 page
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500);
    res.render('500')
});

app.listen(app.get('port'),()=>{
    console.log('Express started on http://localhost:'+app.get('port'));
});