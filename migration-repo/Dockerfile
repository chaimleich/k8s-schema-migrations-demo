FROM node:18.12.1-slim

WORKDIR /app
COPY . .
RUN yarn install

CMD ["npx", "knex", "migrate:latest"]
