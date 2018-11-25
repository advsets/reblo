export interface IJwtPayload {
  username: string;
  options?: any;
}

export interface IJwtReply {
  accessToken: string;
  expiresIn: number;
}
