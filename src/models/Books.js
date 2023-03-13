const mongoose=require('mongoose');


const Bookschema=new mongoose.Schema({
    Bname:{
        type:String
    },
    Bauthor:{
        type:String
    },
    Bprice:{
        type:Number
    }
})

const newBooks=new mongoose.model('Books',Bookschema);
module.exports=newBooks;

