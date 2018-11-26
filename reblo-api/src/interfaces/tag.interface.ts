export interface ITagModel {
  id: number;
  name: string;
  alias: string;
  description: string;
  count: number;
  extends: Array<{ name: string, value: string }>;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITagCreate {
  name: string;
  alias: string;
  description?: string;
  extends?: Array<{ name: string, value: string }>;
}

export interface ITagUpdate {
  id?: string;
  name?: string;
  alias?: string;
  description?: string;
  count?: number;
  extends?: Array<{ name: string, value: string }>;
}
