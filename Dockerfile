FROM node:current-alpine

RUN apk add --no-cache caddy mailcap wget

USER node
WORKDIR /home/node

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --chown=node:node . ./

RUN node --run build
# CMD ["node","--run","start"]

# Export static site with wget
RUN node --run start & \
    while ! nc -z localhost 3000; do sleep 0.5; done && \
    wget --mirror --page-requisites --no-host-directories --directory-prefix=www http://localhost:3000 http://localhost:3000/404 && \
    npx -y pagefind --site www --glob "**/*"

# Run Caddy server
COPY Caddyfile .
CMD ["caddy","run","--config","Caddyfile"]