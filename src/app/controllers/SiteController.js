const Course=require('../models/Courses')
const {multipleMongooseToObject: multipleMongooseToObject} =require('../../util/mongoose.js')
class SiteController{
    // [GET]/
    home(req,res,next){
        Course.find({})
                .then(courses =>{
                     res.render('home',{
                         courses:multipleMongooseToObject(courses)
                        
                        });
                    })
                .catch(next);
    }
    // [get] /search
    search(req,res){
        res.render('search');
    }
}
module.exports =new SiteController;