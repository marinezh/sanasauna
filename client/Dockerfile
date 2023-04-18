# ==== CONFIGURE =====
# Use a Node 18 base image
FROM --platform=linux/amd64 node:18-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 

ARG REACT_APP_API_KEY
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

ARG REACT_APP_AUTH_DOMAIN
ENV REACT_APP_AUTH_DOMAIN=$REACT_APP_AUTH_DOMAIN

ARG REACT_APP_DATABASE_URL
ENV REACT_APP_DATABASE_URL=$REACT_APP_DATABASE_URL

ARG REACT_APP_PROJECT_ID
ENV REACT_APP_PROJECT_ID=$REACT_APP_PROJECT_ID

ARG REACT_APP_APP_ID
ENV REACT_APP_APP_ID=$REACT_APP_APP_ID

ARG REACT_APP_STORAGE_BUCKET
ENV REACT_APP_STORAGE_BUCKET=$REACT_APP_STORAGE_BUCKET

# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Install serve
RUN npm install --global serve
# Start the app
CMD [ "serve", "-s", "build" ]