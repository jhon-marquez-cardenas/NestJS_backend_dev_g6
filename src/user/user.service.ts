import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDTO } from './dto/login_user.dto';
import { UserDTO } from './dto/user.dto';
import { UserEntity } from './models/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}

    async getUser(options?: object): Promise<UserDTO>{
        const userEntity= await this.userRepository.findOne(options);
        return this.userEntityToUserDTO(userEntity);

    }

    async getUserByCredentials({username,password}: LoginUserDTO): Promise<UserDTO>{
        
        const user= await this.getUser({where:{username}});

        if(!user){
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        return user;

    }

    userEntityToUserDTO(userEntity:UserEntity):UserDTO{
        const {id,username,email,updatedAt,active}=userEntity;
        let user:UserDTO={id,username,email,updatedAt,active};
        return user;

    }

}