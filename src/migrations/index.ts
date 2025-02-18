import * as migration_20250208_193141 from './20250208_193141';
import * as migration_20250208_201949 from './20250208_201949';
import * as migration_20250210_231457 from './20250210_231457';

export const migrations = [
  {
    up: migration_20250208_193141.up,
    down: migration_20250208_193141.down,
    name: '20250208_193141',
  },
  {
    up: migration_20250208_201949.up,
    down: migration_20250208_201949.down,
    name: '20250208_201949',
  },
  {
    up: migration_20250210_231457.up,
    down: migration_20250210_231457.down,
    name: '20250210_231457'
  },
];
