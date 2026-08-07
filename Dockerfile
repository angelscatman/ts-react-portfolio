# ─── Stage 1: Build frontend ────────────────────────────────────────────────

FROM node:24-alpine AS builder

WORKDIR /app

ARG PAYLOAD_PUBLIC_SERVER_URL

ENV PAYLOAD_PUBLIC_SERVER_URL=${PAYLOAD_PUBLIC_SERVER_URL}

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build


# ─── Stage 2: Static production server ─────────────────────────────────────

FROM nginxinc/nginx-unprivileged:1.30.4-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder \
  /app/dist \
  /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]