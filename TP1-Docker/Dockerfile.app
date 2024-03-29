FROM node:20.12.0-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

ENV PORT 3000

CMD ["npm", "start"]