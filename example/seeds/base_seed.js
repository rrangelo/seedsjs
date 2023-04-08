'use strict'
const Seed = require('../../index');

const BaseSeed = Seed.define(
    'BaseSeed',
    {
        name: '',
        age: 0
    },
    []
);

module.exports = BaseSeed;