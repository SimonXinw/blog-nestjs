import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1679972349607 implements MigrationInterface {
  name = 'test1679972349607';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`student\` ADD \`age\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`age\``);
  }
}
