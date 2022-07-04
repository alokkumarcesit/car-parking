import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { Car } from './cars/entities/car.entity';
import { ParkingsModule } from './parkings/parkings.module';
import { CarTypesModule } from './car-types/car-types.module';
import { ParkingFeesModule } from './parking-fees/parking-fees.module';
import { CarType } from './car-types/entities/car-type.entity';
import { ParkingFee } from './parking-fees/entities/parking-fee.entity';
import { Parking } from './parkings/entities/parking.entity';
import { SearchModule } from './search/search.module';
import { Search } from './search/entities/search.entity';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/server/src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'car_parking',
      entities: [User, Car, CarType, ParkingFee, Parking, Search],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    CarsModule,
    ParkingsModule,
    CarTypesModule,
    ParkingFeesModule,
    SearchModule,
    AuthModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
