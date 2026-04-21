#FROM nginx:alpine
#RUN rm -rf /usr/share/nginx/html/*
#COPY . /usr/share/nginx/html/
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the application
FROM node:20-alpine AS build-stage

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (this generates the /dist folder)
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy the build output from the build-stage to Nginx's public folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# (Optional) Copy a custom nginx config if you have client-side routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]