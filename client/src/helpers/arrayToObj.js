export const arrayToObj = (arr, keyField) => arr.reduce((obj, item) => {
  obj[item[keyField]] = item; // eslint-disable-line no-param-reassign
  return obj;
}, {});
