const dotenv=require('dotenv');
const axios=require('axios');
//const { json } = require('body-parser');

dotenv.config();

async function getResults(movieSearch){
    const url = `http://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieSearch}`;
    try
    {
        const response =await axios.get(url);
        if(response.status==200)
        {
            const result =response.data;
            return result;
        }
    }catch(error){
        console.log(error);
    };
};

module.exports={ getResults };