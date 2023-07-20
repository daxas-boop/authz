import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { getTypeOrmModuleOptions } from 'src/config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getTypeOrmModuleOptions()),
    UserModule,
  ],
})
export class AppModule {}
