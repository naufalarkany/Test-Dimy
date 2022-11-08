"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("CustomerAddresses", [
            {
                customerId: 1,
                address: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                customerId: 2,
                address: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                customerId: 3,
                address: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                customerId: 4,
                address: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                customerId: 5,
                address: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("CustomerAddresses", null, {});
    },
};
