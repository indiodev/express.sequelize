import { Router } from 'express';

import { register } from './register';

const route = Router();

route.post('/register', register);

export { route as auth_route };
