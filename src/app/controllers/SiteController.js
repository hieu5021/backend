const Course=require('../models/Courses')
class SiteController{
    // [GET]/
    home(req,res,next){
        Course.find({})
            Course.find({})
                .then(courses => res.render('home',{courses}))
                .catch(next);
    }
    // [get] /search
    search(req,res){
        res.render('search');
    }
}
module.exports =new SiteController;