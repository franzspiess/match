FROM node:14.5.0 as match-server

WORKDIR /app

ENV PATH app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm i
RUN npm i -g nodemon

# COPY . ./

CMD ["nodemon", "src/index.js"]