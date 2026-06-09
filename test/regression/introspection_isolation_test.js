'use strict';
const Seed = require('../../index');
const clone = require('../../lib/core/clone_core');
const assert = require('assert');

/**
 * Regression tests for the shared-prototype / introspection bug.
 * See https://github.com/rrangelo/seedsjs/issues/3
 */
describe('Introspection isolation (regression)', function () {

    describe('1 - each seed keeps its own identity', function () {

        it('reports its own name, not the last seed defined', function () {

            const Alpha = Seed.define('Alpha', { x: 0 }, []);
            const Beta = Seed.define('Beta', { y: 0 }, []);

            assert.strictEqual(Alpha.prototype.getName(), 'Alpha');
            assert.strictEqual(Beta.prototype.getName(), 'Beta');

        });

        it('keeps its own bases when another seed is defined afterwards', function () {

            const Parent = Seed.define('Parent', { x: 0 }, []);
            const Child = Seed.define('Child', { y: 0 }, [Parent]);

            assert.strictEqual(Parent.prototype.getBases().length, 0);
            assert.strictEqual(Child.prototype.getBases().length, 1);

        });

        it('does not share a single prototype object across seeds', function () {

            const Alpha = Seed.define('Alpha', { x: 0 }, []);
            const Beta = Seed.define('Beta', { y: 0 }, []);

            assert.notStrictEqual(Alpha.prototype, Beta.prototype);

        });

    });

    describe('2 - getSeedDefiner is callable', function () {

        it('returns the seed definer without throwing', function () {

            const Alpha = Seed.define('Alpha', { x: 0 }, []);

            assert.doesNotThrow(() => Alpha.prototype.getSeedDefiner());
            assert.strictEqual(Alpha.prototype.getSeedDefiner().name, 'Alpha');

        });

    });

    describe('3 - clone isolates nested prototype objects', function () {

        it('does not copy the prototype key by reference', function () {

            const base = { prototype: { tag: 'original' } };

            const cloned = clone(base);
            cloned.prototype.tag = 'mutated';

            assert.notStrictEqual(cloned.prototype, base.prototype);
            assert.strictEqual(base.prototype.tag, 'original');
            assert.strictEqual(cloned.prototype.tag, 'mutated');

        });

    });

});
