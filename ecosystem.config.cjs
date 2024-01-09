module.exports = {
  apps: [
    ...require("jeasx/ecosystem.config.cjs").apps,
    {
      name: "build:scss",
      script: "npm run scss -- --update --watch",
      autorestart: false,
    },
  ],
};
