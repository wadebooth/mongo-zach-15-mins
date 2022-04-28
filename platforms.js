import { getDb } from './db.js';

const getCollection = async () => {
  const db = await getDb();
  return db.collection('platforms');
};

export const createPlatform = async (name) => {
  const col = await getCollection();
  const insertedResults = await col.insertOne({
    name,
  });

  return insertedResults.insertedId;
};

export const getPlatforms = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};
