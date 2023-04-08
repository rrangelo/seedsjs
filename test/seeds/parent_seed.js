'use strict'
const Seed = require('../../index');

const ParentSeed = Seed.define(
    'ParentSeed',
    {
        name: '',
        age: 0
    },
    []
);

module.exports = ParentSeed;