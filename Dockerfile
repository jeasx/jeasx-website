FROM node:current-alpine

RUN apk add --no-cache caddy wget mailcap

USER node
WORKDIR /home/node

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --chown=node:node . ./

RUN node --run build
# CMD ["node","--run","start"]

# Static site export
RUN node --run start & \
    sleep 2 && \
    wget --mirror --page-requisites --no-host-directories --content-on-error --directory-prefix=www http://localhost:3000 http://localhost:3000/404

COPY Caddyfile .
CMD ["caddy","run","--config","Caddyfile"]