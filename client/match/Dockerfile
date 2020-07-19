FROM node:14.5.0-alpine as build
WORKDIR /app
ENV PATH app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build