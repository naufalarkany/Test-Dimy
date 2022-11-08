"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Customers", [
            {
                name: "John",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Doe",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Gina",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Steve",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Clara",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Customers", null, {});
    },
};
