import { Istudent } from "../interfaces/student.interface";

export class CreateStudentDTO implements Istudent{
    readonly code:number;
    readonly name:string;
    readonly photoURL:string;
    readonly createdAt:Date;

}