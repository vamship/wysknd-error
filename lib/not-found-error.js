'use strict';

/**
 * Specialized error class for errors occuring when resources are not found.
 *
 * @extends {Error}
 */
class NotFoundError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.message = (typeof message === 'string') ? message : 'Resource not found';
    }
}

module.exports = NotFoundError;
