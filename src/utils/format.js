import moment from 'moment';

moment.locale('id');

export const thousand = val => (
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
);

export const formatDate = (date, format) => date && moment(date).format(format);

export const removeDot = val => (
  val.toString().replace(/\./g, '')
);

export const noop = () => {};
