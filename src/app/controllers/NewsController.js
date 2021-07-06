class NewsControler{
    // [GET]/news
    index(req,res){
        res.render('news');
    }
    // [get] /news/:slug
    show(req,res){
        res.send('say hello');
    }
}
module.exports =new NewsControler;