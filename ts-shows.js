import { getDb } from './db.js';

const getCollection = async () => {
  const db = await getDb();
  return db.collection('tv-shows');
};

export const createTvShows = async (name, platformIds) => {
  const col = await getCollection();
  const ret = await col.insertOne({
    name,
    platformIds,
  });

  return ret.insertedId;
};

export const getTvShows = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};

export const getShowsByPlatform = async (platformId) => {
  const col = await getCollection();
  const ret = col.find({
    platformId,
  });
  return ret.toArray();
};

export const getShowsByName = async (name) => {
  const col = await getCollection();
  const ret = col.find({
    name: {
      $regex: `.*${name}.*`,
    },
  });
  return ret.toArray();
};

export const getShowsByNameExactMatch = async (name) => {
  const col = await getCollection();
  const ret = col.find({
    name,
  });
  return ret.toArray();
};
