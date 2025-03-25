const { mongoose } = require("mongoose");


const uri = process.env.DB_URI;

const  dbConnect = async () => {
    try{
       if(!uri){
        throw new Error("DB_URI is not defined");
       } ;
       if ()

       
    }catch(error){
        console.log(error);
    }
}