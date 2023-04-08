'use strict'
/**
 * @module clone_core
 * @group core
 */

/**
 * Clone a seed object.
 * @function clone
 * @param {object} proto - Seed object.
 * @param {boolean} includeFunctions - Include functions.
 * @returns {object} a new seed object.
 */
const clone = (proto = {}, includeFunctions = true) => {

    const obj = {};

    Object.getOwnPropertyNames(proto).forEach((key) => {

        if ('prototype' === key) {
            
            Object.defineProperty(obj, key, {
                value: proto[key],
                enumerable: true,
                writable: true,
                configurable: false
            });

        } else {

            switch(typeof proto[key]) {

                case 'object': {
    
                    obj[key] = clone(proto[key], includeFunctions);
    
                    break;
    
                }
                
                case 'undefined': {
                    break;
                }
    
                case 'function': {
                    if (includeFunctions) {
                        obj[key] = proto[key];
                    }
                    break;
                }
    
                default: {
    
                    obj[key] = proto[key];
    
                }
    
            }
    
        }

    });

    return obj;

};

module.exports = clone;