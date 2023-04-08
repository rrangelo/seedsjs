'use strict'
const Seed = require('../index');
const BaseSeed = require('./seeds/base_seed');
const BasedSeed = require('./seeds/based_seed');
const Make = require('./modules/make_module');
const Create = require('./modules/create_module');

console.log('BaseSeed', BaseSeed);
console.log('BasedSeed', BasedSeed);

console.log('');
console.log('Results:');

console.log('');
Create();
Make();

let obj = BaseSeed.maker().name('Pepe').make();console.log(obj.prototype.bases);
let chain = JSON.stringify(obj);
let seed = Seed.unchain(chain, BaseSeed);

console.log('obj:', obj);
console.log('chain:', chain);
console.log('seed:', seed);

obj = BasedSeed.maker().name('Pancho').make();
chain = Seed.enchain(obj);
seed = Seed.unchain(chain, BasedSeed);

console.log('obj:', obj);
console.log('obj:', obj.toString());
console.log('chain:', chain);
console.log('seed:', seed);

console.log('BaseSeed.prototype',BaseSeed.prototype);
console.log('BaseSeed.prototype.getName()',BaseSeed.prototype.getName());
console.log('BaseSeed.prototype.getBases()',BaseSeed.prototype.getBases());
console.log('BaseSeed.prototype.getPrototype()',BaseSeed.prototype.getPrototype());
console.log('BasedSeed.prototype',BasedSeed.prototype);
console.log('BasedSeed.prototype.getName()',BasedSeed.prototype.getName());
console.log('BasedSeed.prototype.getBases()',BasedSeed.prototype.getBases());
console.log('BasedSeed.prototype.getPrototype()',BasedSeed.prototype.getPrototype());

