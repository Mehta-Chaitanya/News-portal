var express = require('express');
var mongoose = require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');
var expresshandlebars=require('express-handlebars');

const CourseController=require("./controller/courses");
var app=express();

//const route=require('./routes/route');
app.use(bodyparser.urlencoded({
    extended:true
}));

mongoose.connect('mongodb://localhost:27017/contactlist');


mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in daabase connection:'+err);
    }
});

const port =3000;

app.set('views',path.join(__dirname,"/views/"));

app.engine("hbs",expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname+"/views/layouts"
}));

app.set("view engine","hbs");

app.get('/',(req,res)=>{
    //res.send('foobar');
   res.render("index",{});
});

app.use("/contacts",CourseController)

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});