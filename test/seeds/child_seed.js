'use strict'
const Seed = require('./../../index');
const ParentSeed = require('./parent_seed');

const ChildSeed = Seed.define(
    'ChildSeed',
    {
        name: '',
        gender: true
    },
    [ParentSeed]
);

module.exports = ChildSeed;