'use strict';

require('reflect-metadata');

let cachedApp;

async function getApp() {
  if (cachedApp) return cachedApp;

  const { NestFactory } = require('@nestjs/core');
  const { AppModule } = require('../dist/app.module');

  const app = await NestFactory.create(AppModule, { logger: false });
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.init();

  cachedApp = app;
  return app;
}

module.exports = async (req, res) => {
  const app = await getApp();
  app.getHttpAdapter().getInstance()(req, res);
};
