import { hash as crypt_hash } from 'bcryptjs';

import type { CryptoService } from '../crypto';

export class BcryptService implements CryptoService {
	async hash(str: string, salt: number): Promise<string> {
		return await crypt_hash(str, salt);
	}
}
