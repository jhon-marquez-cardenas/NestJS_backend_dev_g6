import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { StudentService } from './student.service';
import {CreateStudentDTO} from './dto/create_student.dto';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService){}

    //@Get()
    //getStudent():string{
        //return "It Works";
    //    return this.studentService.getLastStudent();
    //}

    @Get()
    async getStudents(@Res() res){
        const students= await this.studentService.getStudents();
        return res.status(HttpStatus.OK).json({
            students:students
        });
        //return "It Works";
        //return this.studentService.getLastStudent();
    }

    //@Post('/create')
    //createStudent(@Res() res){
    //    return res.status(HttpStatus.CREATED).json({message: 'received'});
    //}

    @Post('/create')
    async createStudent(@Res() res, @Body() CreateStudentDTO:CreateStudentDTO){
        //console.log(student);

        const student=await this.studentService.createStudent(CreateStudentDTO);
        

        return res.status(HttpStatus.CREATED).json({
            message: 'received',
            student: student
        });
    }
}
