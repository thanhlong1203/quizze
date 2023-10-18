'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
console.log(createCoreController);

module.exports = createCoreController('api::category.category');
