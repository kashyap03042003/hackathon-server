import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';


const profSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be atleast 3 characters'],
        maxlength: [50, 'Title cannot be more than 50 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please fill in a valid email address',
        ], // Matches email against regex
    },
    role: [{
        type: String,
    }],
    remainders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }],
    profusername: {
        type: String,
        required: true,
    },
    profpassword: {
        type: String,
        required: true,
    },
});

const Prof = model('Prof', profSchema);

export default Prof;
