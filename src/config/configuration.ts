export default () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  accessKeys: {
    cohereApiKey: process.env.COHERE_API_KEY,
  },
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(`${process.env.DB_PORT}`, 10) ?? 5432,
    username: process.env.DB_USERNAME ?? 'root',
    password: process.env.DB_PASSWORD ?? 'root',
    name: process.env.DB_NAME ?? 'jornadamilhas',
  },
});
