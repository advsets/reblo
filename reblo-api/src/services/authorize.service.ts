import {Injectable} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {IJwtPayload, IJwtReply} from '../interfaces/jwt.interface';
import {JWT_CONFIG} from '../api.config';

@Injectable()
export class AuthorizeService {
  async createToken(payload: IJwtPayload): Promise<IJwtReply> {
    const token = jwt.sign(payload, JWT_CONFIG.secretKey, JWT_CONFIG.options);
    return {token, expiresIn: JWT_CONFIG.options.expiresIn};
  }
}
