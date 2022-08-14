FROM node:16 as development

ARG NODE_ENV=development

WORKDIR /usr/src/docs

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM node:16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/docs

RUN mkdir -p logs \
    && chown -R node logs \
    && chgrp -R node logs

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node --from=development /usr/src/docs/dist ./dist/

COPY --chown=node:node --from=development /usr/src/docs/src/docs ./dist/docs

USER node

CMD ["npm", "run", "start"]