 const express=require("express");

require('./database/conn');
const app=express();
 
const newBooks=require('./models/Books');

app.use(express.json());
const port=process.env.PORT||5000;

//enpoints

//post request

app.post('/books', async (req,res)=>{

try{
    const books=new newBooks(req.body);    // books is also known as collection or table 

    const bookAdd=await books.save();

    res.status(201).send(bookAdd);

}catch(e){

    console.log(e)

    res.status(404).send(e);
}
})

app.get('/books',async (req,res)=>{
    try{
        const Bdata=await newBooks.find();
        res.status(200).send(Bdata)
    }catch(e){
        console.log(e)
    }
})



// useparams by id 

app.get('/books/:id',async (req,res)=>{
    try{
       const _id=req.params.id;
       const data=await newBooks.findById(_id);
       if(!data){
        res.status(404).send();
       }
       else{
        res.send(data);
       }
    }catch(e){
        console.log(e)
    }
})


// update by patch 

app.patch('/books/:id',async (req,res)=>{
    try{
        const _id=req.params.id;
        const updatedBook=await newBooks.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updatedBook);

    }catch(e){
        console.log(e);
    }
})


app.delete("/books/:id",async(res,req)=>{
    try{
        const _id=req.params.id;
        const deleteBook=await newBooks.findByIdAndDelete(_id,req.body,{new:true});
        res.send(deleteBook);
        

    }catch(e){
        console.log(e);
    }
})



app.listen(port,()=>{
    console.log(`listening on http://127.0.0.1:${port}`)
})
