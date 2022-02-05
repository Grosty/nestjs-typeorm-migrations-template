// eslint-disable-next-line @typescript-eslint/no-var-requires
const ormconfig = require('./ormconfig');

module.exports = {
  ...ormconfig,
  migrations: ['seeds/*.js'],
  cli: {
    migrationsDir: 'seeds',
  },
};
