'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Products', 'slug', {
      type: Sequelize.STRING,
      allowNull: true,
    }),
    await queryInterface.addColumn('Products', 'description', {
      type: Sequelize.TEXT('long'),
      allowNull: true,
    }),
    await queryInterface.addColumn('Products', 'is_published', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Products', 'slug', {
      type: Sequelize.STRING,
      allowNull: true,
    }),
    await queryInterface.removeColumn('Products', 'description', {
      type: Sequelize.TEXT('long'),
      allowNull: true,
    }),
    await queryInterface.removeColumn('Products', 'is_published', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    })
  }
};
