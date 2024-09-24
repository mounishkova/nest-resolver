import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleToUser1727163171881 implements MigrationInterface {
    name = 'AddRoleToUser1727163171881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    }

}
