import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import serverless from "jeasx/serverless";

type FastifyServer = typeof serverless;

type RouteProps = {
  request: FastifyRequest;
  reply: FastifyReply;
};
