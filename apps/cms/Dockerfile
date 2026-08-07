# ─── Stage 1: Install dependencies ───────────────────────────────────────────

FROM node:24-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/cms/package.json apps/cms/package.json
COPY apps/web/package.json apps/web/package.json
COPY packages/content-contract/package.json packages/content-contract/package.json

RUN npm ci


# ─── Stage 2: Build ──────────────────────────────────────────────────────────

FROM node:24-alpine AS builder

WORKDIR /app

ARG PAYLOAD_PUBLIC_SERVER_URL

ENV PAYLOAD_PUBLIC_SERVER_URL=${PAYLOAD_PUBLIC_SERVER_URL}
ENV DATABASE_URI=postgres://build:build@127.0.0.1:5432/portfolio_cms_build
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=secret,id=payload_secret \
    PAYLOAD_SECRET="$(cat /run/secrets/payload_secret)" \
    npm run build:cms


# ─── Stage 3: Production runner ──────────────────────────────────────────────

FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3001
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 app \
    && adduser -u 1001 -G app -D app

COPY --from=builder --chown=app:app /app/apps/cms/.next/standalone ./
COPY --from=builder --chown=app:app /app/apps/cms/.next/static ./apps/cms/.next/static

RUN mkdir -p /app/apps/cms/media \
    && chown app:app /app/apps/cms/media

USER app

EXPOSE 3001

CMD ["node", "apps/cms/server.js"]