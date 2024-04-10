import configs from "@configs/index";
import { Resource } from "@models/resource.model";
import { Sequelize } from '@sequelize/core';
// import Modals from "@models/index";

const {
  app: { env },
  postgres: { host, port, name, username, password },
} = configs;

const sequelize: Sequelize = new Sequelize({
  host: host,
  port: Number(port),
  database: name,
  username: username,
  password: password,
  dialect: "postgres",
  logging: env !== "production" ? false : console.log,
  define: {
    underscored: true,
    freezeTableName: true,
  },
  models: [Resource],
},);

export const initializeDatabase = async (sync: boolean = false) => {
  await sequelize.authenticate();

  console.info(`---------------------------------`);
  console.info(`🚀 Connect to database success`);
  console.info(`---------------------------------`);
  // Modals(sequelize);

  if (sync) {
    await sequelize.sync({
      force: false,
      alter: true,
    });

    console.log("=-=- Sync DB Success -=-=");
  }
};

export default {
  sequelize,
  Sequelize,
};