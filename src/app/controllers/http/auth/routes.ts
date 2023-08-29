import { Router } from 'express';

import { signup } from './signup';

const route = Router();

route.post('/signup', signup);

export { route as auth_route };
