"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Products", [
            {
                name: "Tas",
                price: 100000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Baju",
                price: 50000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Celana",
                price: 40000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Jaket",
                price: 120000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Sepatu",
                price: 200000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Products", null, {});
    },
};
