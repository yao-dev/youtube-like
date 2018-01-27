import moment from 'moment';
import * as HelpersConfig from 'helpers/config';

const locale = HelpersConfig.getConfig('locale');

export default (date) => {
  return moment(date).locale(locale);
}
