import mdxPlugin from "@mdx-js/esbuild";
import tailwindPlugin from "esbuild-plugin-tailwindcss";
import rehypePrismPlus from "rehype-prism-plus";

const NODE_ENV_IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export default {
  /** @type {() => import("esbuild").BuildOptions} */
  ESBUILD_SERVER_OPTIONS: () => ({
    loader: { ".svg": "text" },
    plugins: [
      mdxPlugin({
        development: NODE_ENV_IS_DEVELOPMENT,
        jsxImportSource: "jsx-async-runtime",
        elementAttributeNameCase: "html",
        stylePropertyNameCase: "css",
        rehypePlugins: [rehypePrismPlus],
      }),
    ],
  }),

  /** @type {() => import("esbuild").BuildOptions} */
  ESBUILD_BROWSER_OPTIONS: () => ({
    plugins: [tailwindPlugin()],
    target: ["chrome130", "edge130", "firefox130", "safari18"],
  }),

  /** @type {() => import("fastify").FastifyServerOptions} */
  FASTIFY_SERVER_OPTIONS: () => ({
    disableRequestLogging: NODE_ENV_IS_DEVELOPMENT,
  }),

  /** @type {() => import("@fastify/static").FastifyStaticOptions} */
  FASTIFY_STATIC_OPTIONS: () => ({
    immutable: !NODE_ENV_IS_DEVELOPMENT,
    maxAge: NODE_ENV_IS_DEVELOPMENT ? 0 : "365d",
  }),

  /** @type import("@fastify/cookie").FastifyCookieOptions */
  // FASTIFY_COOKIE_OPTIONS: {},

  /** @type import("@fastify/formbody").FastifyFormbodyOptions */
  // FASTIFY_FORMBODY_OPTIONS: {},

  /** @type import("@fastify/multipart").FastifyMultipartOptions */
  // FASTIFY_MULTIPART_OPTIONS: {},
};
