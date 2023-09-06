
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres', 
    connection: {
          host: env('DATABASE_HOST', 'dpg-cjrn4lthe99c73d1c7a0-a.oregon-postgres.render.com/ecommerce_zvd8'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'ecommerce_zvd8'),
          user: env('DATABASE_USERNAME', 'ecommerce_zvd8_user'),
          password: env('DATABASE_PASSWORD', 'lJNwulD916M1FqUoyDTfGgG7hKT2VoRz'),
          ssl: env.bool("DATABASE_SSL", false) && {
            rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
        },
        },
        debug: false,
    },
  });