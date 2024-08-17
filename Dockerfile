FROM node:lts-alpine

USER node
WORKDIR /home/node

COPY --chown=node:node package.json package-lock.json ./
RUN npm install --omit=dev && npm cache clean --force
COPY --chown=node:node . ./

RUN npx jeasx build
CMD ["npx","jeasx","start"]