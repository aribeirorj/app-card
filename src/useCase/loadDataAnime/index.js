import { getService } from '../../services';

async function loadDataAnime(params = '') {
  const { character = '' } = params;
  let param = character ? `anime?filter[text]=${character}` : 'anime';
  return await getService(param);
}

export default loadDataAnime;
