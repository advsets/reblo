import {Injectable} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {IJwtPayload, IJwtReply} from '../interfaces/jwt.interface';

@Injectable()
export class AuthService {
  async createToken(payload: IJwtPayload): Promise<IJwtReply> {
    const accessToken = jwt.sign(payload, 'secretKey', {expiresIn: '5d'});
    return {accessToken, expiresIn: 5 * 60 * 60 * 24};
  }
}
