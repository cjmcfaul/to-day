# Build React static files
FROM node:13.12.0-alpine as build

WORKDIR /code/frontend
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci --silent
COPY ./frontend/ ./
CMD ["npm", "run", "start"]