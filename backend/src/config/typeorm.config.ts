import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

// export const TypeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: '1234',
//   database: 'store',
//   synchronize: true, // ! Don't use this in prod
//     logging: true,
//   entities: [__dirname + '/../**/*.entity.js'],
//   //   subscribers: [],
//   //   migrations: [],
// };

export const typeormAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
      logging: true,
    };
  },
};
