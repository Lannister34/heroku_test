import sequelize from "../db/connection";

const models = {

}

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

sequelize.authenticate().then(async () => {
  console.log("[SEQUELIZE]: Authenticated");
}).catch((error) => {
  console.error("[SEQUELIZE]: Authentication error: ", error);
});

export default models;
