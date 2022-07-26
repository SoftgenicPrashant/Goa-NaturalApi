const clientModel=require("../model/add_client")
const multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
 });
  
 exports.upload = multer({ storage: storage });
  
exports.addClient=(req,res)=>{
    const user=new clientModel({
        p_name:req.body.p_name,
        price:req.body.price,
    
        image:req.file.filename,
        category:req.body.category,
        discount:req.body.discount,
        waight:req.body.waight,
        dics:req.body.dics,
        stock:req.body.stock,
    
    })
    user.save(user).then(data=>{
        res.send(data)})
    .catch(err=>{
        res.status(500).send({
       message:err.message||'some err accur'});
 })
}

exports.findAllclient=(req,res)=>{
    clientModel.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
}
exports.deleteclient=(req,res)=>{
    clientModel.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })  
}

exports.editClient=(req,res)=>{
    const _id=req.params.id;
    console.log(_id)
    const editfield={
        p_name:req.body.p_name,
        price:req.body.price,
    
        image:req.file.filename,
        category:req.body.category,
        discount:req.body.discount,
        waight:req.body.waight,
        dics:req.body.dics,
        stock:req.body.stock,
    
    }
    clientModel.findByIdAndUpdate(_id,editfield, function(err, result){
  
      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }
  
  })
  
  }
  