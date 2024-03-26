const mongoose= require('mongoose')
const bookStoreSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
},
author:{
type: String,
required: true
},
genre:[{
type: String,
required: true
}],
price:{
type: String,
required: true
},
availability:{
type: Boolean,
default: true
}},
{timestamps:true}
);

const BookModel = mongoose.model('Books',bookStoreSchema)
module.exports= BookModel;