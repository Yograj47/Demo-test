const lodash = require('lodash');

const items = [1,[2,[3,[4]]]];;
const flattItems = lodash.flatMapDeep(items);
console.log(items);
console.log(flattItems);
