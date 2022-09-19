'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Variants', 'slug', {
      type: Sequelize.STRING,
      allowNull: true,
    }),
    await queryInterface.addColumn('Variants', 'description', {
      type: Sequelize.TEXT('long'),
      allowNull: true,
    }),
    await queryInterface.addColumn('Variants', 'inventory', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: true,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Variants', 'slug', {
      type: Sequelize.STRING,
      allowNull: true,
    }),
    await queryInterface.removeColumn('Variants', 'description', {
      type: Sequelize.TEXT('long'),
      allowNull: true,
    }),
    await queryInterface.removeColumn('Variants', 'inventory', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: true,
    })
  }
};
