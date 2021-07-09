FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY . .
RUN yarn build
EXPOSE 4000
CMD ["yarn", "start"]