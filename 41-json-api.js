let book = {
  title: 'C++',
  pages: 1200,
  price: 900
};

console.log(JSON.stringify(book));

let stringObject = `[{
  "id": 1,
  "first_name": "Claudius",
  "last_name": "Michin",
  "email": "cmichin0@prnewswire.com",
  "gender": "Male",
  "ip_address": "222.138.248.87"
}, {
  "id": 2,
  "first_name": "Gifford",
  "last_name": "Giraux",
  "email": "ggiraux1@e-recht24.de",
  "gender": "Male",
  "ip_address": "190.230.224.136"
}, {
  "id": 3,
  "first_name": "Chelsy",
  "last_name": "Dhenin",
  "email": "cdhenin2@pinterest.com",
  "gender": "Female",
  "ip_address": "150.212.193.106"
}, {
  "id": 4,
  "first_name": "Karil",
  "last_name": "Swettenham",
  "email": "kswettenham3@sitemeter.com",
  "gender": "Female",
  "ip_address": "107.208.86.86"
}, {
  "id": 5,
  "first_name": "Muffin",
  "last_name": "Sextone",
  "email": "msextone4@cdbaby.com",
  "gender": "Male",
  "ip_address": "39.237.221.253"
}, {
  "id": 6,
  "first_name": "Dame",
  "last_name": "Nissle",
  "email": "dnissle5@zdnet.com",
  "gender": "Male",
  "ip_address": "113.180.227.92"
}, {
  "id": 7,
  "first_name": "Morgun",
  "last_name": "Gother",
  "email": "mgother6@nbcnews.com",
  "gender": "Male",
  "ip_address": "225.40.213.31"
}, {
  "id": 8,
  "first_name": "Eden",
  "last_name": "McAlpine",
  "email": "emcalpine7@amazon.com",
  "gender": "Female",
  "ip_address": "129.38.186.82"
}, {
  "id": 9,
  "first_name": "Karleen",
  "last_name": "Ferries",
  "email": "kferries8@wisc.edu",
  "gender": "Female",
  "ip_address": "223.187.108.16"
}, {
  "id": 10,
  "first_name": "Mella",
  "last_name": "Yoxall",
  "email": "myoxall9@wp.com",
  "gender": "Female",
  "ip_address": "128.221.192.193"
}]`;

let jsonObject = JSON.parse(stringObject);
console.log(jsonObject);
console.log(typeof jsonObject);

//  For getting json objects for testing: https://mockaroo.com/
