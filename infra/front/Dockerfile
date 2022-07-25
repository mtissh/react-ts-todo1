FROM node:16-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/app/front

COPY ./front/package*.json .
COPY ../../front .