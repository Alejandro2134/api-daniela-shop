FROM node:14.18.0-alpine3.12

WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "index.js"]