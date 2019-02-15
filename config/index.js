require('node-path')(module);
var resolve = require('path').resolve;
var filepath = resolve(__dirname, "..", "config", "dev.json");
var conf = {};
conf = require(filepath);

module.exports = config;

function config(key) {
  if (has.call(conf, key)) return conf[key];
  log('Invalid config key "%s"', key);
  return undefined;
}

for (var key in conf) config[key] = conf[key];