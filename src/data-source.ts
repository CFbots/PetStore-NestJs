import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
