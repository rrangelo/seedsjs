'use strict'
const EmptySeedError = require('../errors/empty_seed_error');
const EmptyChainError = require('../errors/empty_chain_error');

/**
 * @module unchain_core
 * @group core
 */

/**
 * Convert a seed object in a chain.
 * @function unchain
 * @param {string} chain - Chain to convert.
 * @param {object} seed - Seed object.
 * @throws {EmptySeedError} when seed is empty.
 * @throws {EmptyChainError} when chain is empty.
 * @returns {string} a new seed object from a chain.
 */
const unchain = (
    chain,
    seed
) => {
    
    if (!seed) {
        throw EmptySeedError;
    }

    if (!chain) {
        throw EmptyChainError;
    }

    let temp = JSON.parse(chain);

    let obj = seed.create();

    Object.keys(temp).forEach((key) => {
        if (obj[key] && obj[key] !== undefined) {
            obj[key] = temp[key];
        };
    });

    return obj;

};

module.exports = unchain;