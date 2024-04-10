import { IResource } from '@interfaces/models/resource';
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from '@sequelize/core';
import { Attribute, AutoIncrement, ColumnName, NotNull, PrimaryKey, Table } from '@sequelize/core/decorators-legacy';
import { Optional } from 'sequelize';

Table({ tableName: 'resource', modelName: 'resource' })
export class Resource extends Model<InferAttributes<Resource>, InferCreationAttributes<Resource>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  declare description: string | null;

}
