const ormconfig = {
  synchronize: false,
  // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*.js'],
  cli: {
    // migrationsDir: 'src/migrations',
    migrationsDir: './migrations',
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(ormconfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity.js'],
    });
    break;
  case 'production':
    Object.assign(ormconfig, {
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'dev_database_migrations',
    });
    break;
  case 'test':
    Object.assign(ormconfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['src/**/*.entity.ts'],
    });
    break;
  case 'provision':
    Object.assign(ormconfig, {});
    break;
  default:
    throw new Error('Unknown environment');
}

module.exports = ormconfig;
