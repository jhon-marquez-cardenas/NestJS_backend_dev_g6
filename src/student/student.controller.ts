import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
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
            data:students
        });
        //return "It Works";
        //return this.studentService.getLastStudent();
    }

    //@Post('/create')
    //createStudent(@Res() res){
    //    return res.status(HttpStatus.CREATED).json({message: 'received'});
    //}

    @Get('/:studentId')
    async getSudent(@Res() res, @Param('studentId') id){
        const student= await this.studentService.getStudentById(id);

        if(!student){
            throw new NotFoundException('Student does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message:'founded',
            data: student

        });


    }

    @Post('/create')
    async createStudent(@Res() res, @Body() CreateStudentDTO:CreateStudentDTO){
        //console.log(student);

        const student=await this.studentService.createStudent(CreateStudentDTO);
        

        return res.status(HttpStatus.CREATED).json({
            message: 'received',
            data: student
        });
    }

    @Put('/update/:studentId')
    async updateStudent(@Res() res, @Body() CreateStudentDTO:CreateStudentDTO,@Param('studentId')id){
        const student=await this.studentService.updateStudent(id,CreateStudentDTO);

        if(!student){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Student updated succesfully',
            data: student
        });

    }

/*
    @Delete('/:delete')
    async deleteStudent(@Res() res, @Query('studentId') id){

        const student=await this.studentService.deleteStudent(id);

        if(!student){
            throw new NotFoundException('Student does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message:'deleted',
            data: student

        });

    }
    */

    @Delete('/delete/:studentId')
    async deleteStudent(@Res() res, @Param('studentId') id){

        const student=await this.studentService.deleteStudent(id);

        if(!student){
            throw new NotFoundException('Student does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message:'deleted',
            data: student

        });

    }
}
