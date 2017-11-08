'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('conditions', [
      { 
        name: 'Poor',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      { 
        name: 'Fair',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      { 
        name: 'Good',
        createdAt: 'now()',
        updatedAt: 'now()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('conditions', null, {});
  }
};
