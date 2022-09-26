'use strict';

const description = `Rock out in the early 90's with this bright neon styled shirt. This shirt is stylized with a
red, green, yellow, and blue color scheme that screams hippie centeral. Enjoy burning man? Wear this! Enjoy parades? Enjoy this!
This shirt comes in multiple colors, and sizes ranging from small - to X-Large.`

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'Blue', slug: 'Blue', description, price: 45.99, productId: 1, inventory: 25, createdAt, updatedAt  },
      { id: 2, title: 'Red', slug: 'Red', description, price: 45.50, productId: 1, inventory: 15, createdAt, updatedAt  },
      { id: 3, title: 'Blue', slug: 'Blue', description, price: 45.99, productId: 2, inventory: 25, createdAt, updatedAt  },
      { id: 4, title: 'Red', slug: 'Red', description, price: 45.50, productId: 2, inventory: 15, createdAt, updatedAt  }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};
