// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: join(__dirname, '.env.' + process.env.NODE_ENV),
});

let ormconfig = {
  synchronize: false,
  migrations: ['migrations/**/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(ormconfig, {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      migrationsRun: process.env.RUN_MIGRATIONS === 'true',
      entities: ['**/*.entity.js'],
    });

    break;
  case 'production':
    // Object.assign(ormconfig, {
    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: parseInt(process.env.POSTGRES_PORT),
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DB,
    //   migrationsRun: process.env.RUN_MIGRATIONS === 'true',
    //   synchronize: false,
    //   entities: ['**/*.entity.js'],
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // });
    Object.assign(ormconfig, {
      type: 'sqlite',
      database: 'prod.sqlite',
      entities: ['**/*.entity.js'],
      migrationsRun: process.env.RUN_MIGRATIONS === 'true',
    });
    break;
  case 'test':
    Object.assign(ormconfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      migrationsRun: true,
    });
    break;
  case 'provision':
    throw new Error('provision environment not set');
    break;
  default:
    throw new Error('Unknown environment');
}

console.log(ormconfig);

module.exports = ormconfig;
