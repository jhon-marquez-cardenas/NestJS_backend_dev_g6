import { Injectable } from '@nestjs/common';
import { Istudent } from './interfaces/student.interface';
import { CreateStudentDTO } from './dto/create_student.dto';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './models/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {

    constructor(@InjectRepository(StudentEntity) private readonly studentRepository: Repository<StudentEntity>){}

    async getStudents(): Promise<Istudent[]>{
        const students= await this.studentRepository.find();
        return students;  
        
    }

    async createStudent(CreateStudentDTO:CreateStudentDTO): Promise<Istudent>{
        const student=await this.studentRepository.save(CreateStudentDTO);
        return student;  
       
    }

    async getStudentById(studentId:string): Promise<Istudent>{
        const student=await this.studentRepository.findOne(studentId);
        return student;  
        
    }

    async updateStudent(studentId:string, CreateStudentDTO:CreateStudentDTO): Promise<any>{
        await this.studentRepository.update(studentId,CreateStudentDTO);
        const updatedStudent=await this.studentRepository.findOne(studentId);
        return updatedStudent;  
     
    }

    async deleteStudent(studentId:string): Promise<any>{
        const deletedStudent=await this.studentRepository.findOne(studentId);
        await this.studentRepository.delete(studentId);
        return deletedStudent;  
   
    }

    //private studentList: string[]=["Carlos","Diana","David"];

    //getLastStudent():string{
    //    return "I'm the last of us";

    //getLastStudent():string[]{
    //    return this.studentList;
    //}


}

