// replaces dots with camelCase
export const camelCase = (str) => {
  return str.replace(/\.\w/g, (match) => match[1].toUpperCase());
};
