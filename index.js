module.exports = all =>
  Object.values(require("os").networkInterfaces())
    .reduce((array, items) => array.concat(items), [])
    .filter(item => item.family === "IPv4" && (all || !item.internal))
    .map(item => item.address);
