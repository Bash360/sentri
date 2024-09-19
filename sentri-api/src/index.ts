import "reflect-metadata";
import express from "express";
import routes from "./routes";
import { ENV } from "./config/env.config";
import { setupSwagger } from "./config/swagger.config";
import dataSource from "./config/dataSource";
import logger from "./config/logger";
import { seedRoles } from "./seeder/seeder";

async function Bootstrap() {
  try {
    await dataSource.initialize();
    logger.info("Data Source has been initialized!");
    await seedRoles();
    const app = express();
    const PORT = ENV.PORT || 3000;
    app.use("/api", routes);

    setupSwagger(app);
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Bootstrap()", error);
     process.exit(1);
  }
}

Bootstrap();
