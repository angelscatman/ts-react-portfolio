HOST_PORT ?= 8080
CMS_PORT ?= 3001
CMS_SERVICE ?= cms
WEB_SERVICE ?= web

.PHONY: help install dev dev-cms build build-cms lint typecheck docker-dev docker-prod docker-dev-down docker-prod-down docker-dev-logs docker-prod-logs docker-cms-logs docker-web-logs docker-build docker-config docker-migrate docker-migrate-create generate-importmap generate-types migrate-cms migrate-create-cms clean

help:
	@echo ""
	@echo "╔════════════════════════════════════════════════════════════╗"
	@echo "║      ts-portfolio - Makefile Commands                    ║"
	@echo "╚════════════════════════════════════════════════════════════╝"
	@echo ""
	@echo ">> SETUP"
	@echo "   [*] make install             Install dependencies"
	@echo ""
	@echo ">> DEVELOPMENT"
	@echo "   [*] make dev                 Run web app locally"
	@echo "   [*] make dev-cms             Run Payload CMS locally"
	@echo "   [*] make docker-dev          Run development Docker stack"
	@echo "   [*] make docker-dev-down     Stop development Docker stack"
	@echo "   [*] make docker-dev-logs     Follow development stack logs"
	@echo "   [*] make docker-cms-logs     Follow CMS logs"
	@echo "   [*] make docker-web-logs     Follow web logs"
	@echo ""
	@echo ">> PRODUCTION-LIKE"
	@echo "   [*] make docker-prod         Run production-like Docker stack"
	@echo "   [*] make docker-prod-down    Stop production-like Docker stack"
	@echo "   [*] make docker-prod-logs    Follow production-like stack logs"
	@echo ""
	@echo ">> QUALITY"
	@echo "   [*] make build               Build web app"
	@echo "   [*] make build-cms           Build Payload CMS"
	@echo "   [*] make lint                Run ESLint and typecheck"
	@echo "   [*] make typecheck           Run TypeScript"
	@echo "   [*] make generate-importmap  Generate Payload import map"
	@echo "   [*] make generate-types      Generate Payload types"
	@echo "   [*] make migrate-cms         Run Payload migrations locally"
	@echo "   [*] make migrate-create-cms  Create a Payload migration locally"
	@echo ""
	@echo ">> DOCKER"
	@echo "   [*] make docker-build        Build Docker images"
	@echo "   [*] make docker-config       Validate Docker Compose config"
	@echo "   [*] make docker-migrate      Run Payload migrations inside Docker"
	@echo "   [*] make docker-migrate-create NAME=<name>  Create migration inside Docker"
	@echo ""
	@echo ">> CLEANUP"
	@echo "   [*] make clean               Remove build artifacts"
	@echo ""

install:
	@echo ">> Installing dependencies..."
	npm install
	@echo "\n[✓] Installation complete\n"

dev:
	npm run dev

dev-cms:
	npm run dev:cms

build:
	npm run build

build-cms:
	npm run build:cms

lint:
	npm run lint

typecheck:
	npm run typecheck

generate-importmap:
	npm run generate:importmap:cms

generate-types:
	npm run generate:types -w @portfolio/cms

migrate-cms:
	npm run migrate:cms

migrate-create-cms:
	npm run migrate:create:cms -- $(NAME)

docker-dev:
	docker compose -f compose.yml -f compose.dev.yml up --build

docker-prod:
	docker compose up --build

docker-dev-down:
	docker compose -f compose.yml -f compose.dev.yml down

docker-prod-down:
	docker compose down

docker-dev-logs:
	docker compose -f compose.yml -f compose.dev.yml logs -f

docker-prod-logs:
	docker compose logs -f

docker-cms-logs:
	docker compose logs -f $(CMS_SERVICE)

docker-web-logs:
	docker compose logs -f $(WEB_SERVICE)

docker-build:
	docker compose build

docker-config:
	@PAYLOAD_SECRET=$${PAYLOAD_SECRET:-test-secret} docker compose config
	@PAYLOAD_SECRET=$${PAYLOAD_SECRET:-test-secret} docker compose -f compose.yml -f compose.dev.yml config

docker-migrate:
	docker compose -f compose.yml -f compose.dev.yml exec cms npm run migrate -w @portfolio/cms

docker-migrate-create:
	docker compose -f compose.yml -f compose.dev.yml exec cms npm run migrate:create -w @portfolio/cms -- $(NAME)

clean:
	@echo ">> Cleaning build artifacts..."
	rm -rf dist coverage apps/cms/.next apps/web/dist
	@echo "[✓] Clean complete\n"
