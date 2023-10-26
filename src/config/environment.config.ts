export const EnvironmentConfig = {
  app: {
    name: process.env.APP_NAME,
    port: Number(process.env.PORT) || 3000,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
    name: process.env.DATABASE_NAME,
  },
} as const;
