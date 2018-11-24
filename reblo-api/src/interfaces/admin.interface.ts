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
  loggedAt: string;
}
