FROM node:16 AS builder
COPY ./ /website
WORKDIR /website
RUN yarn install && yarn next build && yarn next export -o _build


FROM nginx:stable-alpine
ENV DEBIAN_FRONTEND noninteractive
COPY --from=builder /website/_build/ /usr/share/nginx/html/