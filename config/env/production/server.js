module.exports = {
    apps: [
      {
        name: 'strapi-app',
        cwd: '/home/your-name/your-project', // must have absolute path
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };