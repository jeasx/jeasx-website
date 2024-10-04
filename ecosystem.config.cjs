module.exports = {
  apps: [
    ...require("jeasx/ecosystem.config.cjs").apps,
    {
      name: "build:css",
      script: "npm",
      args: "run build:css -- --watch",
      autorestart: false,
    },
  ],
};
