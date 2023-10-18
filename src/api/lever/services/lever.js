'use strict';

/**
 * lever service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lever.lever');
