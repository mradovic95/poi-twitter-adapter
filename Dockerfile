FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm ci --only=production && npm cache clean --force

CMD node src/index.js

EXPOSE 8080
