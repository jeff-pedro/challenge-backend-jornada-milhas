export default () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  accessKeys: {
    cohereApiKey: process.env.COHERE_API_KEY,
  },
});
