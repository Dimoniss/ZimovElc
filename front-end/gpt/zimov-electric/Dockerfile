# Stage 1: Build Vue App
FROM node:18.10.0-alpine as build

# Install git and update packages
RUN apk update && apk add git

# Set working directory
WORKDIR /prj

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Vue app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.25.2-alpine

# Remove default Nginx config and replace with custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Vue build output to Nginx's HTML directory
COPY --from=build /prj/dist/ /usr/share/nginx/html/

# Expose the correct port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
