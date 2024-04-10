import { Resource } from "@models/resource.model";
import { Model } from "sequelize";

export interface IResource {
  name: string;
  description: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface IResourceFilter {
  name?: string;
  time?: string;
}

export interface IResourceTest {
  id: number;
  name: string;
  description: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
