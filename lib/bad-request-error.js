'use strict';

/**
 * Specialized error class for errors occuring when the input to a service is
 * incorrectly formatted.
 *
 * @extends {Error}
 */
class BadRequestError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        this.name = 'BadRequestError';
        this.message = (typeof message === 'string') ? message : 'Bad request';
    }
}

module.exports = BadRequestError;
