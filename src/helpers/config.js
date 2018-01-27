import get    from 'lodash/get';
import config from 'src/config';

export const getConfig = (path) => get(config, path, null);

export default {
  getConfig
};
