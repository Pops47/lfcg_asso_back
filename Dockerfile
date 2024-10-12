FROM node:22-alpine3.19

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npx prisma generate

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]