export interface IAdminModel {
  id: number;
  username: string;
  email: string;
  nickname?: string;
  createdAt?: Date;
  loggedAt?: Date;
}

export interface IAdminCreate {
  username: string;
  email: string;
  password: string;
}

export interface IAdminUpdate {
  username?: string;
  email?: string;
  password?: string;
  nickname?: string;
  loggedAt: Date;
}

export interface ILoginInput {
  account: string;
  password: string;
}
