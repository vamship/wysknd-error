'use strict';

/**
 * Specialized error class for errors occuring when schema validation fails.
 *
 * @extends {Error}
 */
class SchemaError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        this.name = 'SchemaError';
        this.message = (typeof message === 'string') ? message : 'Schema validation failed';
    }
}

module.exports = SchemaError;
