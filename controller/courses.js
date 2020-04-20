const express = require('express');
const mongoose = require('mongoose');
var assert= require('assert')


const router = express.Router();
//const CourseModel = mongoose.model("Contact");
var Contact = require('../models/contacts');



router.get("/list",function(req,res,next){
    var resultarray=[];
    var db;
    var error;
    mongoose.connect('mongodb://localhost:27017/contactlist',function(err,database){
        error=err;
        db=database;
        assert.equal(null,err);
        var cursor=db.collection('contacts').find();
        cursor.forEach(function(doc,err){
           assert.equal(null,err);
            resultarray.push(doc);
        },function(){
            db.close();
            res.render("list.hbs",{data: resultarray});
            //res.render("index.hbs",{data: resultarray});


        });
    });
  
});

router.get("/sports",function(req,res,next){
    var resultarraysp=[];
    var db;
    var error;
    mongoose.connect('mongodb://localhost:27017/contactlist',function(err,database){
        error=err;
        db=database;
        assert.equal(null,err);
        var cursor=db.collection('contacts').find();
        cursor.forEach(function(spdoc,err){
           assert.equal(null,err);
            if(spdoc.category=="sports")
            {
                   resultarraysp.push(spdoc);
            }
           
        },function(){
            db.close();
            res.render("sports.hbs",{datasp: resultarraysp});
            //res.render("index.hbs",{data: resultarray});


        });
    });

    
  
});

router.get("/Education",function(req,res,next){
    var resultarrayed=[];
    var db;
    var error;
    mongoose.connect('mongodb://localhost:27017/contactlist',function(err,database){
        error=err;
        db=database;
        assert.equal(null,err);
        var cursor=db.collection('contacts').find();
        cursor.forEach(function(eddoc,err){
           assert.equal(null,err);
           if(eddoc.category=="Education")
            {
                   resultarrayed.push(eddoc);
            }
            
        },function(){
            db.close();
            res.render("Education.hbs",{eddata: resultarrayed});
            //res.render("index.hbs",{data: resultarray});


        });
    });
  
});

router.get("/Business",function(req,res,next){
    var resultarraybu=[];
    var db;
    var error;
    mongoose.connect('mongodb://localhost:27017/contactlist',function(err,database){
        error=err;
        db=database;
        assert.equal(null,err);
        var cursor=db.collection('contacts').find();
        cursor.forEach(function(docbu,err){
           assert.equal(null,err);
           if(docbu.category=="Business")
            {
                   resultarraybu.push(docbu);
            }
            
        },function(){
            db.close();
            res.render("Business.hbs",{databu: resultarraybu});
            //res.render("index.hbs",{data: resultarray});


        });
    });
  
});

router.get("/Tech",function(req,res,next){
    var resultarrayte=[];
    var db;
    var error;
    mongoose.connect('mongodb://localhost:27017/contactlist',function(err,database){
        error=err;
        db=database;
        assert.equal(null,err);
        var cursor=db.collection('contacts').find();
        cursor.forEach(function(docte,err){
           assert.equal(null,err);
           if(docte.category=="Tech")
            {
                   resultarrayte.push(docte);
            }
            
        },function(){
            db.close();
            res.render("Tech.hbs",{datate: resultarrayte});
            //res.render("index.hbs",{data: resultarray});


        });
    });
  
});


router.get("/corona",function(req,res,next){
    var resultarrayco=[];
    var db;
    var error;
    mongoose.connect('mongodb://localhost:27017/contactlist',function(err,database){
        error=err;
        db=database;
        assert.equal(null,err);
        var cursor=db.collection('contacts').find();
        cursor.forEach(function(docco,err){
           assert.equal(null,err);
           if(docco.category=="corona")
            {
                   resultarrayco.push(docco);
            }
            
        },function(){
            db.close();
            res.render("corona.hbs",{dataco: resultarrayco});
            //res.render("index.hbs",{data: resultarray});


        });
    });
  
});



router.get("/lifestyle",function(req,res,next){
    var resultarrayli=[];
    var db;
    var error;
    mongoose.connect('mongodb://localhost:27017/contactlist',function(err,database){
        error=err;
        db=database;
        assert.equal(null,err);
        var cursor=db.collection('contacts').find();
        cursor.forEach(function(docli,err){
           assert.equal(null,err);
           if(docli.category=="lifestyle")
            {
                   resultarrayli.push(docli);
            }
            
        },function(){
            db.close();
            res.render("lifestyle.hbs",{datali: resultarrayli});
            //res.render("index.hbs",{data: resultarray});


        });
    });
  
});

module.exports=router;
