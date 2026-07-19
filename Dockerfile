FROM node:22.19.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run build -- --base=/books/
RUN npm run build 

FROM nginx:alpine

RUN apk add --no-cache tzdata
ENV TZ=America/Sao_Paulo

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]