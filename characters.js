import { getDb } from './db.js';

const getCollection = async () => {
  const db = await getDb();
  return db.collection('characters');
};

export const createCharacters = async (name, tvShowId) => {
  const col = await getCollection();
  const ret = await col.insertOne({
    name,
    tvShowId,
  });

  return ret.insertedId;
};

export const getCharacters = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};

export const getCharactersByTvShow = async (tvShowId) => {
  const col = await getCollection();
  const ret = col.find({
    tvShowId,
  });
  return ret.toArray();
};
