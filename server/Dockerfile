FROM node:18.6-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --omit=dev
COPY . /app
ENV NODE_ENV=production
RUN npm run build

FROM node:18.6-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm i
COPY --from=builder /app/dist /app
EXPOSE 5500
CMD ["node", "main.js"]
