import { moment } from 'libraries';

/**
 * a helper for get path user
 * @param {*} path a path require string
 */
export const getPath = (path = '') => (path ? `/${path}` : '');

/**
 * a helper to conver object to url paramss
 * @param {*} params a params require trully object
 */
export const createUrlParamFromObj = (params = null) => {
  if (!params) return '';
  const result = [];
  Object.keys(params).map(key => result.push(`${key}=${params[key]}`));
  return `?${result.join('&')}`;
};

/**
 * a helper to handling custom url
 * @param {*} url
 */
export const getCustomUrl = (url = '') => url;

/**
 * a helper to handling contentType of header request
 * @param {*} type a default type is application/json
 */
export const getContentType = (type = '') => {
  switch (type) {
    case 'form-data':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};

/**
 * a helper for creating header in request
 * @param {*} value
 * @param {*} base
 */
export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value
});

/**
 * a helper to shorthand promise result
 * @param {*} promise
 */
export const handleAsync = async promise => {
  try {
    const response = await promise;
    return [response, undefined];
  } catch (err) {
    return [undefined, err];
  }
};

/**
 * a helper to convert date with moment
 * @param {*} date
 */
export const convertDate = date => {
  if (!date) return null;
  return moment(date).format('DD MMMM YYYY');
};

