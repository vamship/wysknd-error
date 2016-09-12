/* jshint node:true, expr:true */
'use strict';


module.exports = {
    /**
     * Returns the class definition for a NotFound error, intended to identify
     * errors that occur when a particular resource was not found.
     */
    NotFoundError: require('./not-found-error'),

    /**
     * Returns the class definition for a SchemaError error, intended to identify
     * errors that occur when schema validation fails.
     */
    SchemaError: require('./schema-error'),

    /**
     * Returns the class definition for a BadRequest error, intended to identify
     * errors that occur when a request to a service is incorrectly formatted.
     */
    BadRequestError: require('./bad-request-error'),

    /**
     * Returns the class definition for a BadRequest error, intended to identify
     * errors that occur when a request to a service is incorrectly formatted.
     */
    UnauthorizedError: require('./unauthorized-error'),
};
