import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Istudent } from './interfaces/student.interface';
import { CreateStudentDTO } from './dto/create_student.dto';

@Injectable()
export class StudentService {

    constructor(){}

    async getStudents(): Promise<Istudent[]>{
        return null;  
        
    }

    async createStudent(CreateStudentDTO: CreateStudentDTO): Promise<Istudent>{
        return null;  
       
    }

    async getStudentById(studentId:string): Promise<Istudent>{
        return null;  
        
    }

    async updateStudent(studentId:string, CreateStudentDTO:CreateStudentDTO): Promise<Istudent>{
        return null;  
     
    }

    async deleteStudent(studentId:string): Promise<Istudent>{
        return null;  
   
    }

    //private studentList: string[]=["Carlos","Diana","David"];

    //getLastStudent():string{
    //    return "I'm the last of us";

    //getLastStudent():string[]{
    //    return this.studentList;
    //}


}

