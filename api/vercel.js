import serverless from "jeasx/serverless.js";

export default async (req, res) => {
  serverless.server.emit("request", req, res);
};

await serverless.ready();
