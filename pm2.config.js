module.exports = {
  apps: [
    {
      name: 'MDF',
      cwd: __dirname,
      script: './server',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '8484',
        API_URL: 'http://192.168.5.11:8485',
      },
      watch: true,
      exec_mode: 'cluster',
      instances: 4,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
