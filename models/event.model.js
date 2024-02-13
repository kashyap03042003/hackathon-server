import mongoose from 'mongoose';
import {Schema ,model} from 'mongoose';
//import Club from './club.model';


const eventSchema = new Schema({
    eventName:{
        type:String,
        required:true,
    },
    purpose:{
        type:String, 
    },
    club_name:{
        type:String,
        required:true,
    },
    venuename:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    start_time:{
        type:String,
        required:true,
      },
    end_time:{
        type:String,
        required:true,
      },
    
    permissionRequired:{
       venue: {   
            
            type:Boolean,
        }  ,   
        girls_permission: {   
            
            type:Boolean,
        }  ,   
        equipments: {   
            
            type:Boolean,
        }  ,   
        sports_equipments: {   
            
            type:Boolean,
        }  ,   
        classes_off: {   
            
            type:Boolean,
        }  ,      
    },
    expected_expenditure:{
        type:Number,
        required:true,
    }, 
    advance_required:{
        type:Boolean,
        required:true,

    },    
    permission:[{
         profincharge:{
            type:Boolean,
         }
    },
    {  
         hod:{
            type:Boolean,
         }

    },
    {
        dean:{
            type:Boolean,
        }

    },
    {
        deanpd:{
            type:Boolean,
        }
    }]
});

const eventmodel=model('event',eventSchema);
export default eventmodel;