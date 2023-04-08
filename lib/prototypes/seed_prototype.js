'use strict'
const DefinerPrototype = require('./definer_prototype');
const seed = require('../core/seed_core');
const create = require('../core/create_core');
const maker = require('../core/maker_core');
const clone = require('../core/clone_core');

/**
 * @module seed_prototype
 * @group prototypes
 */

/**
 * SeedPrototype.
 * @typedef {object} SeedPrototype
 * @property {function} create - Create a seed object from a seed prototype.
 * @property {function} maker - Return a maker object to make a seed object.
 * @property {object} prototype - Seed prototype.
 */

/**
 * @type {SeedPrototype}
 */
const SeedPrototype = {

    /**
     * Create a seed object from a seed prototype.
     * @function create
     * @returns {object} a seed object.
     */
    create: function() {
        return create(this.prototype.getSeedPrototype());
    },

    /**
     * Return a maker object to make a seed object.
     * @function maker
     * @returns {object} a seed object.
     */
    maker: function() {
        return maker(this.prototype.getName(), this.prototype.getSeedPrototype());
    },

    /**
     * prototype
     * @typedef {object} prototype
     * @property {function} getSeedDefiner - Get a seed definer.
     * @property {function} getSeedPrototype - Get a seed prototype.
     * @property {function} getName - Get a seed name.
     * @property {function} getBases - Get a seed bases.
     * @property {function} getPrototype - Get a seed prototype.
     * @inner
    */

    /**
     * @type {prototype}
     */
    prototype: {

        '$definer': {},

        '$setSeedDefiner': function(name = '', prototype = {}, bases = []) {
            let seedDefiner = clone(DefinerPrototype);
            seedDefiner.setBases(bases);
            seedDefiner.prototype = clone(prototype);
            seedDefiner.name = name;
            seedDefiner.seed = seed(name, clone(prototype), seedDefiner.bases);
            this['$definer'] = clone(seedDefiner);
        },

        /**
         * Get a seed definer.
         * @function getSeedDefiner
         * @returns {object} a seed definer prototype.
         */
        getSeedDefiner: function(){
            return this[$definer]
        },

        /**
         * Get a seed prototype.
         * @function getSeedPrototype
         * @returns {object} a seed prototype.
         */
        getSeedPrototype: function() {
            return clone(this['$definer'].seed);
        },

        /**
         * Get a seed name.
         * @function getName
         * @returns {string} a seed name.
         */
        getName: function() {
            return this['$definer'].name;
        },

        /**
         * Get a seed bases.
         * @function getBases
         * @returns {array} a seed bases.
         */
        getBases: function() {
            return this['$definer'].bases;
        },

        /**
         * Get a js prototype.
         * @function getPrototype
         * @returns {object} a js prototype.
         */
        getPrototype: function() {
            return clone(this['$definer'].prototype);
        }

    }

};

module.exports = clone(SeedPrototype);