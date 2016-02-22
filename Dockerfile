FROM node:argon

COPY package.json /src/package.json
COPY app.js /src/app.js


RUN cd /src
WORKDIR /src

RUN npm install

EXPOSE 3000

CMD node app.js
