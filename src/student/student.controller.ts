import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService){}

    //@Get()
    //getStudent():string{
        //return "It Works";
    //    return this.studentService.getLastStudent();
    //}

    @Get()
    getStudent():string[]{
        //return "It Works";
        return this.studentService.getLastStudent();
    }

    @Post('/create')
    createStudent(@Res() res){
        return res.status(HttpStatus.CREATED).json({message: 'received'});
    }
}