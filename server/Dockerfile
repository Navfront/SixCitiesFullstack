FROM node

WORKDIR /app

COPY package.json /app

RUN npm i

COPY /dist /app

EXPOSE 5500


CMD ["node", "main.js"]
