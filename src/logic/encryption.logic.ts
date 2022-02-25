import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';

export function Hash(value: string): string {
  return bcrypt.hashSync(value, 12);
}

export function CompareHash(unencryptedString: string, encryptedString: string): boolean {
  return bcrypt.compareSync(unencryptedString, encryptedString);
}

export function Encrypt(value: string, key: string, iv = '1583288699248111'): string {
  const parsedKey = CryptoJS.enc.Utf8.parse(key);
  const parsedIV = CryptoJS.enc.Utf8.parse(iv);

  const encrypted = CryptoJS.AES.encrypt(value, parsedKey, { iv: parsedIV });
  return encrypted.toString();
}

export function Decrypt(encryptedValue: string, key: string, iv = '1583288699248111'): string {
  const parsedKey = CryptoJS.enc.Utf8.parse(key);
  const parsedIV = CryptoJS.enc.Utf8.parse(iv);
  const decryptedFromText = CryptoJS.AES.decrypt(encryptedValue, parsedKey, { iv: parsedIV });
  return decryptedFromText.toString(CryptoJS.enc.Utf8);
}
