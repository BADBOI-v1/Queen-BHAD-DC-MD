FROM node:16

# Install dependencies
RUN apt-get update && apt-get install -y \
  pkg-config \
  libpangocairo-1.0-0

# Clone the repository
RUN git clone https://github.com/DeeCeeXxx/QUEEN_ANITA-V2 /root/DeeCeeXxx

# Set working directory
WORKDIR /root/DeeCeeXxx

# Install Node.js dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
