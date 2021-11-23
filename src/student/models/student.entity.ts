import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students')
export class StudentEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    code: number;

    @Column()
    name: string;

    @Column({default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmELH_c8IjjmJcHfAYa32ucR0pogpKRkL3w&usqp=CAU'})
    photoURL: string;

    @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

}