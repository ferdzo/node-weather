var geoip = require('geoip-lite');

var ip = "92.55.106.204";
var geo = geoip.lookup(ip);

console.log(geo);
/*{ range: [ 3479297920, 3479301339 ],
  country: 'US',
  region: 'TX',
  city: 'San Antonio',
  ll: [ 29.4889, -98.3987 ],
  metro: 641,
  zip: 78218 } */