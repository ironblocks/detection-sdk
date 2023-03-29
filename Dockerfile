#
# Stage 1: Build TypeScript code
#
FROM node:18-alpine AS builder

# Install rsync
RUN apk add --no-cache rsync

# Set working directory
WORKDIR /detection-service

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript code
RUN npm run build

#
# Stage 2: Create production image
#
FROM node:18-alpine

# Set working directory
WORKDIR /detection-service

# Copy production dependencies
COPY --from=builder /detection-service/package*.json ./
RUN npm ci --production

# Copy built TypeScript code
COPY --from=builder /detection-service/build ./build

# Expose the port that the application will run on.
EXPOSE 8000

# Start the server
CMD [ "npm", "start" ]
