import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {

    private studentList: string[]=["Carlos","Diana","David"];

    //getLastStudent():string{
    //    return "I'm the last of us";

    getLastStudent():string[]{
        return this.studentList;
    }
}

