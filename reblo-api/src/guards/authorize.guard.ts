import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {IJwtPayload} from '../interfaces/jwt.interface';
import {JWT_CONFIG} from '../api.config';

@Injectable()
export class AuthorizeGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authorization: string = req.headers['Authorization'] || req.headers['authorization'];
    if (!authorization) {
      throw new HttpException('Header 缺少 authorization', HttpStatus.UNAUTHORIZED);
    }
    if (!['Bearer ', 'bearer '].includes(authorization.slice(0, 7))) {
      throw new HttpException('Token 错误', HttpStatus.UNAUTHORIZED);
    }
    const token: string = authorization.slice(7);

    try {
      // @ts-ignore fixme 解析出的 TOKEN 拿到session中，或者redis中验证
      const decodedToken: IJwtPayload = jwt.verify(token, JWT_CONFIG.secretKey);
      return true;
    } catch (err) {
      if (err instanceof jwt.JsonWebTokenError) {
        throw new HttpException('Token 无效', HttpStatus.UNAUTHORIZED);
      }
      if (err instanceof jwt.TokenExpiredError) {
        throw new HttpException('Token 过期', HttpStatus.UNAUTHORIZED);
      }
    }
  }
}
