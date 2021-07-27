import { Sequelize } from "sequelize";
import * as config from "../../../config/db.config";

const { database, username, password, ...params } = config;
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, params)
  : new Sequelize(database, username, password, params);

export default sequelize;
