'use strict';

/**
 * penguino service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::penguino.penguino');
