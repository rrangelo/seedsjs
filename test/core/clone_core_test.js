'use strict';
const clone = require('./../../lib/core/clone_core');
const assert = require('assert');

describe('Clone Tests', function () {

    describe('1 - clone Success', function () {

        describe('1.1 - clone all success', function () {

            it('should be ok', function () {

                const base = {
                    obj: {},
                    str: '',
                    bool: true,
                    numb: 0,
                    undef: undefined,
                    prototype: {},
                    fun1: function() {
                        console.log(this);
                    },
                    fun2: function(param) {
                        console.log(param);
                    },
                    fun3: function() {
                        return this;
                    }
                };

                const cloned = clone(base);
                
                base.bool = false;

                assert.ok(cloned);
                assert.ok(cloned.bool !== base.bool);
                assert.ok(!cloned.undef);

            });

        });
        
        describe('1.2 - clone not functions success', function () {

            it('should be ok', function () {

                const base = {
                    obj: {},
                    str: '',
                    bool: true,
                    numb: 0,
                    undef: undefined,
                    prototype: {},
                    fun1: function() {
                        console.log(this);
                    },
                    fun2: function(param) {
                        console.log(param);
                    },
                    fun3: function() {
                        return this;
                    }
                };

                const cloned = clone(base, false);
                
                base.bool = false;

                assert.ok(cloned);
                assert.ok(cloned.bool !== base.bool);
                assert.ok(!cloned.undef);
                assert.ok(!cloned.fun1);

            });

            it('should be ok', function () {

                const cloned = clone();
                
                assert.ok(cloned);

            });

        });
    
    });
    
  });
  