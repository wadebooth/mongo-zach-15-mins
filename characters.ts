import { getDb } from './db.js';

interface Character {
  name: string;
  tvShowID: string;

}

const getCollection = async () => {
  const db = await getDb();
  return db.collection('characters');
};

export const createCharacters = async (character: Character) => {
  const col = await getCollection();
  const ret = await col.insertOne(character);

  return ret.insertedId;
};

export const getCharacters = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};

export const getCharactersByTvShow = async (tvShowId: string) => {
  const col = await getCollection();
  const ret = col.find({
    tvShowId,
  });
  return ret.toArray();
};
