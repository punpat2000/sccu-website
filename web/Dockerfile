FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build --configuration production

FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/web /usr/share/nginx/html
EXPOSE 80
