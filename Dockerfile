FROM node:16.9.1

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./tsconfig.json
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/index.js" ]
