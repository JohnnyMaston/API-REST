FROM node

COPY $PWD /usar/src/app

WORKDIR /usar/src/app

RUN npm install -g node-gyp

RUN yarn install

EXPOSE 3000

CMD ["node", "/usar/src/app/index.js"]