import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;
const hashPassword = async (password:string) =>{
  const newPassword = await bcrypt.hash(password, saltOrRounds)
  return newPassword;
}
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>){}
  async create(createUserInput: CreateUserInput) {
    if(createUserInput.password){
      createUserInput.password = await hashPassword(createUserInput.password);
    }
    if(createUserInput.email){
      const user = await this.findOneByEmail(createUserInput.email);
      if(user){
        throw new HttpException({
          message: "Email Already Exitis"
        }, HttpStatus.BAD_REQUEST);
      }
    } else if(createUserInput.phone){
      const user = await this.findOneByPhone(createUserInput.phone);
      if(user){
        throw new HttpException({
          message: "phone Already Exitis"
        }, HttpStatus.BAD_REQUEST);
      }
    }
    try{
      const user = await this.userRepo.create(createUserInput);
      await this.userRepo.save(createUserInput)
      return user;
    }catch(err){
      throw new HttpException({
        message: "Please check payload"
      }, HttpStatus.BAD_REQUEST);
    }
    
  }

  async findAll() {
    const user = await this.userRepo.find({});
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  findOneByEmail(email:string){
    return this.userRepo.findOneBy({email});
  }
  findOneByPhone(phone:number){
    return this.userRepo.findOneBy({phone})
  }

  async update(email:string, updateUserInput: UpdateUserInput) {
    const user = await this.findOneByEmail(email);
    delete updateUserInput.id;
    if(updateUserInput.password) {
      user.password = await hashPassword(updateUserInput.password);
      delete updateUserInput.password;
    }
    const updateUser = {
      ...user,
      ...updateUserInput,
    }
    await this.userRepo.update(updateUser.id,updateUser);
    return updateUser;

  }
}
