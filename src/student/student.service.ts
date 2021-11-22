import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Istudent } from './interfaces/student.interface';
import { CreateStudentDTO } from './dto/create_student.dto';

@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private readonly studentModel: Model <Istudent>){}

    async getStudents(): Promise<Istudent[]>{
        const students= await this.studentModel.find();
        return students;
    }

    async createStudent(CreateStudentDTO: CreateStudentDTO): Promise<Istudent>{
        const student= new this.studentModel(CreateStudentDTO);
        await student.save();//Aquí es donde guarda en la base de datos
        return student;

    }

    async getStudentById(studentId:string): Promise<Istudent>{
        const student= await this.studentModel.findById(studentId);
        return student;

    }

    async updateStudent(studentId:string, CreateStudentDTO:CreateStudentDTO): Promise<Istudent>{
        const updatedStudent= await this.studentModel.findByIdAndUpdate(studentId,CreateStudentDTO,{new:true});
        return updatedStudent;


    }

    async deleteStudent(studentId:string): Promise<Istudent>{
        const deletedStudent=this.studentModel.findByIdAndDelete(studentId);
        return deletedStudent;

    }

    //private studentList: string[]=["Carlos","Diana","David"];

    //getLastStudent():string{
    //    return "I'm the last of us";

    //getLastStudent():string[]{
    //    return this.studentList;
    //}


}

