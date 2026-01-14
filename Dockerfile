FROM node:lts-alpine

RUN apk add --no-cache caddy wget

USER node
WORKDIR /home/node

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --chown=node:node . ./

RUN node --run build
RUN node --run start & \
    sleep 1 && \
    wget --mirror --page-requisites --no-host-directories --directory-prefix=www http://localhost:3000

CMD ["caddy","file-server","--listen",":3000","--root","www"]