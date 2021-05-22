module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'mydb',
            dialect: 'mysql',
            user: 'root',
            password: '49567309'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
        }
    }
}