# Sanasauna!

Web app to help you learn those Finnish words. Check out the live version [here](http://sanasauna-balancer-646478718.us-east-1.elb.amazonaws.com/)!

![Screenshot](screenshot_home.png)

![Screenshot](screenshot_topic.png)

## About the project

Team project created with [@preetiag18](https://github.com/preetiag18) and [@marinezh](https://github.com/marinezh) as a part of Full Stack Web Development course at Business College Helsinki.

### Technologies used

- Node.js, Express
- React, Redux
- Firebase
- AWS, Docker

## How to run

Clone the repo and set up the project:

### Backend

- cd into /server
- `npm install`
- `node wordsServer`
- server will start running on port 3001 (change port in storage/serverConfig.json if needed)

### Frontend

- cd into /client
- `npm install`
- `npm start`
- Open `localhost:3000` in a browser of your choice

## Deployment

This app is deployed on AWS ECS Fargate. After making changes in the app, do below to update application on Ecs

1. Build new docker image for client or server or both (depending on the change)

For client, run below

```bash
docker build --build-arg REACT_APP_API_KEY=<API_KEY> --build-arg REACT_APP_AUTH_DOMAIN=<domain> --build-arg REACT_APP_DATABASE_URL=<database url> --build-arg REACT_APP_PROJECT_ID=<project id> --build-arg REACT_APP_APP_ID=<app id> --build-arg REACT_APP_STORAGE_BUCKET=<storage bucker> -t preetiag18/sanasauna:<image-tag> ./client
```

Replace the placeholder args and image tag before running.

For server, run below

```bash
docker build -t preetiag18/sanasauna:<image-tag> ./server
```

2. Push newly created docker images

```bash
docker push preetiag18/sanasauna:<image-tag>
docker push preetiag18/sanasauna:<image-tag>
```

3. Login to AWS and update the ECS task definitions with new image tag

4. Update ECS cluster service to use new task revision.
