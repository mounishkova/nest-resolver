import { ConfigService } from '@nestjs/config'
import { DataSource } from 'typeorm'
import { User } from './entities/user';
import { config } from 'dotenv';

config(); // Load environment variables

const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [User],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
  logging: true,
  ssl: { rejectUnauthorized: false },
});

export default dataSource;

export const DbConnection = [
  {
    provide: 'DataSource',
    useFactory: async () => {
      return dataSource.initialize();
    },
  }
];