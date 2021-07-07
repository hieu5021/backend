const newsRouter = require('./news');
const SiteRouter = require('./site');
const courseRouter = require('./courses');
function route(app){
    // route: đường dẫn 

    app.use('/news',newsRouter); 
    app.use('/courses',courseRouter); 
    app.use('/',SiteRouter); 
}

module.exports =route;