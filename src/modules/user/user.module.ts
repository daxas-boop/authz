import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from 'src/modules/user/application/services/user.service';
import { UserMapperService } from 'src/modules/user/application/mapper/user.mapper';
import { USER_REPOSITORY } from 'src/modules/user/application/repositories/user.repository';
import { UserMysqlRepository } from 'src/modules/user/infrastructure/persistence/user.mysql.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    UserMapperService,
    {
      provide: USER_REPOSITORY,
      useValue: UserMysqlRepository,
    },
  ],
})
export class UserModule {}
