import axios         from 'axios';
import HelpersConfig from 'helpers/config';

export const search = async (options = {}, callback) => {
  var params = {
    ...options,
    ...HelpersConfig.getConfig('youtube.api.options'),
  };

  if (!params.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  try {
    const response = await axios.get(HelpersConfig.getConfig('youtube.api.root_url'), { params });

    if (callback) return callback(response.data);
  } catch (e) {
    console.error(e);
  }
};

export const validTerm = term => {
  if (!term || !term.trim().length) return false;
  return true;
};

export const getEmbedUrl = (videoId, options = {}) => {
  const embedBaseUrl = HelpersConfig.getConfig('youtube.embed_base_url');
  let queryArgs = Object.keys(options).map(key => {
    const value = options[key];
    const keyValue = `${key}=${value}`;

    return keyValue;
  });

  queryArgs = queryArgs.join('&');
  const embedUrl = `${embedBaseUrl}/${videoId}?${queryArgs}`;

  return embedUrl;
};

export const getDownloadUrl = (videoId) => {
  const downloadBaseUrl = HelpersConfig.getConfig('youtube.download_base_url');
  const downloadUrl = `${downloadBaseUrl}?v=${videoId}`;

  return downloadUrl;
};

export const downloadMp3 = async (videoUrl) => {
  try {
    await axios.get(videoUrl);
  } catch (e) {
    return e;
  }
};

export default {
  search,
  validTerm,
  getEmbedUrl,
  getDownloadUrl,
  downloadMp3,
};
