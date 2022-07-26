const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    p_name:{type:String},
    price:{type:String},
    image:{type:String},
    category:{type:String},
    
    discount:{type:String},
    waight:{type:String},
    
    dics:{type:String},
    stock:{type:String},
})
const user=new mongoose.model('product',userSchema);
module.exports=user;