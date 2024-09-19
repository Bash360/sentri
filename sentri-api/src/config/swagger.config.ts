import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { ENV } from "./env.config";
import logger from "./logger";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sentri API",
      version: "1.0.0",
      description: "API documentation for the Sentru",
    },
    servers: [
      {
        url: `${ENV.API_BASE_URL }/api`, 
      },
    ],
  },
  apis: ["./src/**/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express): void {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  logger.info("Swagger docs available at /api-docs");
}
