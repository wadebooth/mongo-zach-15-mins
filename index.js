import {
  createCharacters,
  getCharacters,
  getCharactersByTvShow,
} from './characters.js';
import { createPlatform, getPlatforms } from './platforms.js';
import {
  createTvShows,
  getShowsByName,
  getShowsByPlatform,
  getTvShows,
} from './ts-shows.js';

await createPlatform('Netflix');
await createPlatform('Hulu');
const platforms = await getPlatforms();
await createTvShows('30 Rock', [platforms[0]._id, platforms[1]._id]);
await createTvShows('The Office', [platforms[0]._id, platforms[1]._id]);
const showsByPlatforms = await getShowsByPlatform(platforms[0]._id);
console.log(`${platforms[0].name} 2nd TV Show: ${showsByPlatforms[1].name}`);

const tvShows = await getTvShows();
console.log(tvShows);

await createCharacters('Michael Scott', tvShows[1]._id);
await createCharacters('Pam Beasley', tvShows[1]._id);
const characters = await getCharactersByTvShow(showsByPlatforms[1]._id);
console.log(`These are my characters ${characters}`);
const tvShowsByName = await getShowsByName('30');
console.log(tvShowsByName);
