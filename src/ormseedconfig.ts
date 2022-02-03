import ormconfig from './ormconfig';
import { ConnectionOptions } from 'typeorm';

const ormseedconfig: ConnectionOptions = {
  ...ormconfig,
  // migrations: ['src/seeds/*.ts'],
  migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default ormseedconfig;
