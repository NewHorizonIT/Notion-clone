# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the application port
EXPOSE 3000

# Set environment variables (optional, can also be loaded from .env)
ENV NODE_ENV=production

# Build the application (if needed, e.g., for TypeScript)
RUN npm run build

# Start the application
CMD ["npm", "start"]