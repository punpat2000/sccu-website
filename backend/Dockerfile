FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn add -D typescript
RUN yarn install --prod
COPY . .
RUN yarn build
EXPOSE 4000
CMD ["yarn", "start"]