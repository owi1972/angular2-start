# Angular2 Start

A starter project for angular 2 inspired by [Angular2 Universal Starter](https://github.com/angular/universal-starter/)

## Installation

* `npm install -g typescript typings nodemon`
* `npm install`

## Serve

* `npm start` to build your client app and start a web server
* `npm run build` to prepare a distributable bundle

## Watch files
* `npm watch` to build your client app and start a web server

## Docker

This application has been designed to run under docker to ease portability and deployment. This
section will describe how to get the application up and running with docker.

This project is comprised of two services; the FE Angular application and a node application
server to handle Angular2 server-side rendering.

### Building the Docker Image

To build the images locally run:
```
$ npm run build:image
```

Docker image names can be configured in package.json `config.image`.

### Running the Application

Docker compose provides a simple way to run the services:
```
$ docker-compose up -d
```

Alternatively the individual services can be run directly:
```
$ docker run --rm -it --name febe soon/angular2-start-febe:latest
$ docker run --rm -it --name fe --links febe:febe --ports 80:80 soon/angular2-start:latest
```
