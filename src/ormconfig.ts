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
      host: '127.0.0.1',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'dev_database_migrations',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    };
    break;
  case 'test':
    ormconfig = {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
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
