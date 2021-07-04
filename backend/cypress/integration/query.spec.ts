import * as CryptoJS from 'crypto-js';
import type { Query } from '../models/query.model';

describe('test query', () => {
  const SECRET = '8A216A97DF478A5A18D3928F7D69F';
  const encrypt = (obj: Query): string => {
    const plainText = JSON.stringify(obj);
    const b64 = CryptoJS.AES.encrypt(plainText, SECRET).toString();
    const e64 = CryptoJS.enc.Base64.parse(b64);
    const eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
  };

  it('responses with status 200 and correct data', () => {
    for (let i = 1; i < 15; i++) {
      const obj: Query = { id: i };
      const encrypted: string = encrypt(obj);
      cy.request(`http://localhost:4000/getDataTest?id=${encrypted}`).then(
        (resp) => {
          expect(resp.status).to.eq(200);
          expect(resp.body).to.eq('you found me, yike! im in spreadsheet lol');
        }
      );
    }
  });
});
