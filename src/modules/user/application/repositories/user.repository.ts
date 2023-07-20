import { User } from 'src/modules/user/domain/user.domain';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface UserRepository {
  getAll(): Promise<User[]>;
}
