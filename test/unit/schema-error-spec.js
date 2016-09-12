/* jshint node:true, expr:true */
'use strict';

const _sinon = require('sinon');
const _chai = require('chai');
_chai.use(require('sinon-chai'));
_chai.use(require('chai-as-promised'));
const expect = _chai.expect;
const _testValueProvider = require('wysknd-test').testValueProvider;

const SchemaError = require('../../lib/schema-error');

describe('SchemaError', () => {
    const DEFAULT_MESSAGE = 'Schema validation failed';

    describe('ctor()', () => {
        it('should return an object that is an instance of the Error object with default property values', () => {
            const error = new SchemaError();

            expect(error).to.be.an.instanceOf(Error);
            expect(error.name).to.equal('SchemaError');
            expect(error.message).to.equal(DEFAULT_MESSAGE);
        });

        it('should persist the error message property when specified', () => {
            const message = 'Something went wrong';
            const error = new SchemaError(message);

            expect(error).to.be.an.instanceOf(Error);
            expect(error.message).to.equal(message);
        });

        it('should ignore any message values that are not strings', () => {
            _testValueProvider.allButString().forEach((message) => {
                const error = new SchemaError(message);

                expect(error.message).to.equal(DEFAULT_MESSAGE);
            });
        });
    });
});
