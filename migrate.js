require('ts-node/register');

require('./src/database/umzug').Migrator.runAsCLI();
