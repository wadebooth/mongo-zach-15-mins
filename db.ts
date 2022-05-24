import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const getDb = async () => {
  const client = new mongodb.MongoClient(process.env.MONGO_URL!);
  await client.connect();

  return client.db('zachs-db');
};
