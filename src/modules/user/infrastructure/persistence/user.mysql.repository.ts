import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMapperService } from 'src/modules/user/application/mapper/user.mapper';
import { UserRepository } from 'src/modules/user/application/repositories/user.repository';
import { User } from 'src/modules/user/domain/user.domain';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserMysqlRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userMapperService: UserMapperService,
  ) {}

  async getAll(): Promise<User[]> {
    const userEntities = await this.userRepository.find();
    return userEntities.map(this.userMapperService.mapUserEntityToUser);
  }
}
