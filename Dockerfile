FROM node:10.16.0-alpine

WORKDIR /home/node

COPY . .

RUN npm install

RUN npm start