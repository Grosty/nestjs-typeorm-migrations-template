const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateUser1644093411617 {
    name = 'CreateUser1644093411617'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
