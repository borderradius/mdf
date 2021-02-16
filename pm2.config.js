module.exports = {
  apps: [
    {
      name: 'mdf',
      cwd: __dirname,
      script: './server',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '80',
        API_URL: 'http://210.223.45.233:8485',
      },
      watch: true,
      exec_mode: 'cluster',
      instances: 4,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
