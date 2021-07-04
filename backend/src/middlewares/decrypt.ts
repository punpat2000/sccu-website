import type { Request, Response, NextFunction } from 'express';
import Hex from 'crypto-js/enc-hex';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import { isQuery } from '../utils/is-query.util';

/**
 * Decrypt the request
 */
const decryptRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    if (!req.query.id) {
      res.sendStatus(400);
    }

    const id = req.query.id;
    const SECRET = 'sccu-website-testing';
    const reb64 = Hex.parse(id as string);
    const bytes = reb64.toString(Base64);
    const decrypt = AES.decrypt(bytes, SECRET);
    const plain = decrypt.toString(Utf8);
    const obj = JSON.parse(plain);
    if (!isQuery(obj)) {
      res.sendStatus(400);
      return;
    }

    res.locals.id = obj.id;
    console.log(`id=${obj.id}`);
    next();
  } catch (err) {
    res.sendStatus(400);
  }
};

export { decryptRequest };
