module.exports = {
  apps: [
    {
      name: 'env-ts',
      cwd: __dirname,
      script: './server',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '4444',
        API_URL: 'http://sample.bmaster.kro.kr/',
      },
      watch: true,
      exec_mode: 'cluster',
      instances: 4,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
