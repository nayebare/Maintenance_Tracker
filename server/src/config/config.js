import dotenv from 'dotenv';

dotenv.config();
export const config = {
  development: {
    user: 'nrukmxauomxysi',
    database: 'd4euko1ikv7r23',
    host: 'ec2-23-21-171-249.compute-1.amazonaws.com',
    password: 'c49acfd496fb5306a94aeecb8b82848739b05785accc835150ac465eeb112b7d',
    port: '5432',
    ssl: true
  },
  test:
  {
    user: process.env.testUserName,
    password: process.env.testPassword,
    database: 'postgres',
    host: '127.0.0.1',
    port: process.env.conPort,
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};
let setConnectionString;
const env = process.env.NODE_ENV || 'development';
if (env === 'production') 
setConnectionString = { connectionString: process.env.DATABASE_URL, ssl: true };
else setConnectionString = config[env];


export const connectionString = setConnectionString;
