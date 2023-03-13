const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


mongoose.connect('mongodb://127.0.0.1:27017/books') 
.then( () => console.log('connected'))
.catch((e) => {
    console.log(`can't connect because of ${e}`)
})