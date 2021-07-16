FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN yarn run build:ssr
CMD ["yarn", "run", "serve:ssr"]
