# Start with the Node image
FROM node:lts-bookworm-slim

# Set the folder inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies inside the image
RUN npm install

# Copy the rest of your code
COPY . .

# (Optional) specific command to run
CMD ["npm", "start"]
