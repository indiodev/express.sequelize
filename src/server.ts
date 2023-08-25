import { app } from './app';
import { SequelizeConnection } from './database/connection';
import { Env } from './env';

SequelizeConnection.sync({ force: false }).then(() => {
	console.log({ database: 'synced successfully.' });
	app.listen(Env.PORT, () => {
		console.log({
			server: `listen on http://localhost:${Env.PORT}/${Env.PREFIX}`,
		});
	});
});
