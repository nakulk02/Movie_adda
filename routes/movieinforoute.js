const express=require('express');
const movieinforouter=express.Router();

const movieinfo=require('../services/movieinfo');
movieinforouter.get('/:id',async function(req,res,next){
    try{
        const data = await movieinfo.getResults(req.params.id);
        let genrearr=[];
        for(let i=0;i<data.genres.length;i++)
        {
            genrearr.push(data.genres[i].name);
        }
        let backgroundurl = 'https://image.tmdb.org/t/p/w185/' + data.backdrop_path;
        //console.log(data);
        res.render('moviefile.ejs',{
            title :data.original_title,
            overview: data.overview,
            rating: data.vote_average,
            genre: genrearr,
            tagline:data.tagline,
            movieurl: backgroundurl
        });
    }
    catch(error)
    {
        console.log('Error message',err);
        next(err);
    }
});

module.exports={
    movieinforouter
};