const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32828546-a8b3cc930d15adedebd405197';

export const getPictures = name => {
  return fetch(`${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&per_page=12`);
};