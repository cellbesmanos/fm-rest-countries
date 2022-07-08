function sanitize(str) {
  return str.trim().replace(/\s\s+/g, " ");
}

function toProper(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export { sanitize, toProper };
