# Use Node.js 20 as the base image
FROM node:20

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port (change if necessary)
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]
