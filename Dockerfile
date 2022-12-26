###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

# RUN apt-get update && apt-get install -y openssl
RUN apk update && apk add openssl

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

RUN npm install -g npm@9.2.0 @jridgewell/sourcemap-codec

COPY --chown=node:node . .

RUN npm run prisma:generate

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]