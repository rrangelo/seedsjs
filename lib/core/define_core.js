'use strict'
const SeedPrototype = require('../prototypes/seed_prototype');
const EmptyNameError = require('../errors/empty_name_error');
const clone = require('./clone_core');

/**
 * @module define_core
 * @group core
 */

/**
 * Define a seed from a JS object.
 * @function define
 * @param {string} name - Seed name.
 * @param {object} prototype - JS prototype.
 * @param {array} bases - Seed bases.
 * @throws {EmptyNameError} if name is empty.
 * @returns {object} a seed.
 * */
const define = ( 
    name = '',
    prototype = {},
    bases = []
) => {

    if (name === '' || name === ' ') {
        throw EmptyNameError;
    }
    
    let seed = clone(SeedPrototype);

    seed.prototype['$setSeedDefiner'](name, clone(prototype), bases);

    return clone(seed);

};

module.exports = define;