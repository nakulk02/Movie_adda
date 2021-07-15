const express = require('express');
const cors=require('cors');
//create a web app
const app = express();
const ejs = require('ejs');

const {movieRouter} = require('./routes/moviesearch');
const {movieinforouter}=require('./routes/movieinforoute');
const path=require('path');
//to access variables from .env files
const dotenv=require('dotenv');
dotenv.config(); 

//When we have to deal with json things or apis
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

app.use(cors());


// app.get('/',(req,res)=>{
//     res.send('Working just fine');
// });

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname+'/views/layouts'));
// const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))
// const moviedata = require('./')
app.get('/',(req,res)=>{
    res.render('home.ejs');
});

app.use(`/moviesearch`,movieRouter);
app.use('/result',movieinforouter);

app.listen(process.env.PORT,()=>{
    console.log(`App running at:http://localhost:${process.env.PORT}`);
});