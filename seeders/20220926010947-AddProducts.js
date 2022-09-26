'use strict';

const description = `Rock out in the early 90's with this bright neon styled shirt. This shirt is stylized with a
red, green, yellow, and blue color scheme that screams hippie centeral. Enjoy burning man? Wear this! Enjoy parades? Enjoy this!
This shirt comes in multiple colors, and sizes ranging from small - to X-Large.`

const [ createdAt, updatedAt ] = [ new Date(), new Date()]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        title: 'Tie-Dye Shirt',
        slug: 'Red-Green-Yellow-Blue-Shirt',
        price: 45.30,
        is_published: true,
        description, createdAt, updatedAt
      },
      {
        id: 2,
        title: 'Tie-Dye Long-Sleeve T-Shirt',
        slug: 'Red-Green-Yellow-Blue-Shirt-Long-Sleeve',
        price: 59.99,
        is_published: true,
        description, createdAt, updatedAt
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};
