import { ConnectionOptions } from 'typeorm';

let ormconfig: ConnectionOptions;

switch (process.env.NODE_ENV) {
  case 'development':
    ormconfig = {
      type: 'sqlite',
      database: 'db.sqlite',
      // entities: [__dirname + '/**/*.entity.js'],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    };
    break;
  case 'production':
    ormconfig = {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      migrationsRun: process.env.RUN_MIGRATIONS === 'true',
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    };
    break;
  case 'test':
    ormconfig = {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      migrationsRun: true,
      cli: {
        migrationsDir: 'src/migrations',
      },
    };
    break;
  case 'provision':
    throw new Error('provision environment not set');
    break;
  default:
    throw new Error('Unknown environment');
}

export default ormconfig;
