/* eslint-disable no-unused-vars */
export interface CryptoService {
	hash(str: string, salt: number): Promise<string>;
	// compare(str: string, hash: string): Promise<boolean>;
}
