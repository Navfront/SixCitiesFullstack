FROM node:18.6-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm i -g @nestjs/cli
RUN npm ci
COPY . /app
ENV NODE_ENV=production
RUN npm run build

FROM node:18.6-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm ci
COPY --from=builder /app/dist /app
EXPOSE 5500
CMD ["node", "main.js"]
