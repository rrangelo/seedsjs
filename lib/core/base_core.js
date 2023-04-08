'use strict'
const clone = require('./clone_core');
/**
 * @module base_core
 * @group core
 */ 

/**
 * Create a seed prototype from mixin bases.
 * @function base
 * @memberof module:base_core
 * @requires module:clone_core
 * @param {object} seedPrototype seed prototype.
 * @param {array} bases seed bases.
 * @returns {object} a seed prototype base on prototype and bases.
 * */
const base = (
    seedPrototype = {},
    bases = []
) => {

    if (bases.length !== 0) {

        bases.forEach((base) => {

            let obj = base.create();
    
            seedPrototype.prototype.bases.push(obj);
    
            Object.keys(obj)
            .forEach((key) => {
                
                if (!seedPrototype[key]) {
    
                    switch(typeof obj[key]) {
    
                        case 'undefined': {
                            break;
                        }
    
                        case 'symbol':
                        case 'function':
                        case 'object': 
                        default: {
    
                            seedPrototype[key] = obj[key];
    
                        }
    
                    }
    
                }
        
            });
    
        });
    
    }

    return clone(seedPrototype);
    
};

module.exports = base;