#
# Angular2 Start Base Image
# Builds a base docker image to build the frontend services from
#

FROM mhart/alpine-node:4

# Install OS dependencies
RUN apk update && apk add \
    nginx make g++ python git && \
    rm -rf /var/cache/apk/*

# Ensure a SOON user exists
RUN adduser -S -g soon soon

# Install dependencies
WORKDIR /angular2-start
ADD package.json /angular2-start/package.json
RUN npm install --production

# Bundle app build
# Copy source code last as everything that follows this will not be cached by docker
COPY ./dist /angular2-start/dist
