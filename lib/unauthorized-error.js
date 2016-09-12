'use strict';

/**
 * Specialized error class for errors occuring when a user is not authorized to
 * perform a specific action.
 *
 * @extends {Error}
 */
class UnauthorizedError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedError';
        this.message = (typeof message === 'string') ? message : 'Unauthorized';
    }
}

module.exports = UnauthorizedError;
