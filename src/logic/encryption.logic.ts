import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';

export function Hash(value: string): string {
	return bcrypt.hashSync(value, 12);
}

export function CompareHash(unencryptedString: string, encryptedString: string): boolean {
	return bcrypt.compareSync(unencryptedString, encryptedString);
}

export function Encrypt(value: string, salt: string): string {
	return CryptoJS.AES.encrypt(value, salt).toString();
}

export function Decrypt(encryptedValue: string, salt: string): string {
	const bytes = CryptoJS.AES.decrypt(encryptedValue, salt);
	return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}