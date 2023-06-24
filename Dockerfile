# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

ENV DB_HOST=db
ENV DB_USER=mynodeapp
ENV DB_PASSWORD=mynodeapp
ENV DB_DATABASE=mydb

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
