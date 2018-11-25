export interface IJwtPayload {
  id: number;
  username: string;
}

export interface IJwtReply {
  token: string;
  expiresIn: number | string;
}
