import { app } from './app';
import { Env } from './config/env';
import { SequelizeConnection } from './database/connection';

SequelizeConnection.sync({ force: false }).then(() => {
	console.log({ database: 'synced successfully.' });
	app.listen(Env.PORT, () => {
		console.log({
			server: `listen on http://localhost:${Env.PORT}/${Env.PREFIX} `,
		});
	});
});
