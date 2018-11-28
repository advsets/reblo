export interface ICategoryModel {
  id: number;
  name: string;
  alias: string;
  description: string;
  count: number;
  extends: Array<{ name: string, value: string }>;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryCreate {
  name: string;
  alias: string;
  description?: string;
  extends?: Array<{ name: string, value: string }>;
}

export interface ICategoryUpdate {
  name?: string;
  alias?: string;
  description?: string;
  count?: number;
  extends?: Array<{ name: string, value: string }>;
}
