# Dockerfile.frontend

# base image
FROM node:11-alpine

# set working directory
WORKDIR /usr/src/app

# environment vars must be included in dockerfile
ARG NODE_ENV=production

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

# silent so we don't have to watch the whole thing download everytime
RUN npm install --silent

# Start application
CMD ["npm", "start"]