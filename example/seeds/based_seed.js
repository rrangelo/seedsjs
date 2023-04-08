'use strict'
const Seed = require('../../index');
const BaseSeed = require('./base_seed');

const BasedSeed = Seed.define(
    'BasedSeed',
    {
        name: '',
        gender: true
    },
    [BaseSeed]
);

module.exports = BasedSeed;