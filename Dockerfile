FROM docker.io/library/node:16 AS builder
WORKDIR /website
RUN yarn install && yarn next build && yarn next export -o _build


FROM docker.parrot.run/library/nginx:stable-alpine
ENV DEBIAN_FRONTEND noninteractive
COPY --from=builder /website/_build/ /usr/share/nginx/html/