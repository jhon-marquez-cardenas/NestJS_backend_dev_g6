    import { Document } from "mongoose";
    
    export interface Istudent extends Document{

        readonly code:number;
        readonly name:string;
        readonly photoURL:string;
        readonly createdAt:Date;
}