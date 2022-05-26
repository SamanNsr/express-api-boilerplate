FROM node:12.19.1-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

ENTRYPOINT ["./docker-entrypoint.sh"]
