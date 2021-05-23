FROM node:16.1.0-alpine

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve
