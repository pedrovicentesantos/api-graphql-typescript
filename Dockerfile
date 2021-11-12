FROM node:alpine

WORKDIR /app

COPY package.json tsconfig.json ./

RUN npm i

CMD npm run dev
