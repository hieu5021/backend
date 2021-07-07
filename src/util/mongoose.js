module.exports ={
multipleMongooseToObject:function(mongoose){
    return mongoose.map(course => course.toObject());
    },
    mongooseToObject :function (mongoose){
        return mongoose ? this.mongooseToObject() : mongoose;
    }
}