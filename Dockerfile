FROM node:lts-alpine3.16
WORKDIR /app
COPY package.json .
RUN npm i
EXPOSE 5000
RUN mkdir src
COPY src/* ./src
COPY tsconfig.json .
RUN npm run build
CMD npm run start
