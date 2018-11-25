import {createHash} from 'crypto';

const saltPassword = (password) => {
  password = `REBLO:${password}:REBLO`;
  return createHash('md5').update(password).digest('hex').toUpperCase();
};

export const parsePassword = (password) => {
  password = saltPassword(password);
  return createHash('sha1').update(password).digest('hex');
};

export const checkPassword = (password, cipher) => {
  password = parsePassword(password);
  return password === cipher;
};
