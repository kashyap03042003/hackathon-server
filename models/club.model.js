import mongoose from 'mongoose';
import {Schema ,model} from 'mongoose';


const clubSchema = new Schema({
    clubname:{
        type:String,
        required:true,
    },
    clubhead:{
        type:String,
        required:true,
    },
    budget:{
        type:Number,
        required:true,
    },
    
    events:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
    }],
        profName:{
           type:String,
           required:true,
        },
        profEmail:{
           type:String,
           required:true,
        },
    clubEmail:{
      type:String,
    },
    clubusername:{
      type:String,
      required:true,  
    },
    clubpassword:{
        type:String,
        required:true,
    },    
});


const Club = model('Club', clubSchema);

export default Club;