"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("PaymentMethods", [
            {
                name: 11,
                isActive: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 22,
                isActive: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 33,
                isActive: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 44,
                isActive: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 55,
                isActive: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("PaymentMethods", null, {});
    },
};
