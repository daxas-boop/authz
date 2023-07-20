import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/domain/user.domain';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/entities/user.entity';

@Injectable()
export class UserMapperService {
  mapUserEntityToUser(userEntity: UserEntity): User {
    const user = new User();
    user.username = userEntity.username;
    user.password = userEntity.password;
    return user;
  }
}
