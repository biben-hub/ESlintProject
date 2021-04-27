FROM node:15-alpine

WORKDIR /app

COPY package.json /ESLINTPROJECT

RUN npm install -g nodemon

EXPOSE 80

COPY . /app

CMD ["nodemon", "src/app.ts"]