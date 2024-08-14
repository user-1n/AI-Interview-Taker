/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://top-20-Ideas_owner:Cayz6nu3trhf@ep-snowy-meadow-a56jmx0l.us-east-2.aws.neon.tech/ai-interview-taker?sslmode=require',
    }
  };