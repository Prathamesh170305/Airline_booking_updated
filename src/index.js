const express= require("express");
const{PORT}=require('./config/serverConfig');
const{City}=require('./models/index');
const bodyPraser=require('body-parser');
const CityRepository=require('./repository/city-repository');

const setupAndStartServer=async()=>{
    //create the express object 
    const app=express();

    //middlewares
    app.use(bodyPraser.json());
    app.use(bodyPraser.urlencoded({extended:true}));


    //start the server 
    app.listen(PORT,async()=>{
        console.log(`Server started on port ${PORT}`);
        const repo=new CityRepository();
        repo.Createcity({name:"New Delhi"});
        repo.deleteCity(2);
        repo.deleteCity(3);
        repo.deleteCity(4);
        repo.deleteCity(5);
        repo.deleteCity(6);
        repo.deleteCity(7);
        repo.deleteCity(8);
        
    });
}

setupAndStartServer();