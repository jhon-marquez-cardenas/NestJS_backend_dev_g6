import {Schema} from 'mongoose';

export const StudentSchema=new Schema({
    code: {type: Number, required:true},
    name: {type: String, required:true},
    photoURL:{
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});