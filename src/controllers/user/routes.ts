import { Router } from 'express';

import { register } from './register';

const route = Router();

route.post('/', register);

export { route as user_route };
