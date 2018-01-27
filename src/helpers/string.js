export const maxLength = (str = '', maxLength = 100) => {
  const strLength = str.length;
  const etc = '...';

  if (!maxLength || !(strLength > maxLength)) return str;

  let newStr = str.substr(0, maxLength).trim();
  newStr = newStr.length >= (etc.length + 1) ? `${newStr.slice(0, 0 - etc.length)}${etc}` : newStr;

  return newStr;
};

export default {
  maxLength,
};
