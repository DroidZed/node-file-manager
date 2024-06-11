#IMAGE_TAG=latest
include .env

build:
	docker build -t ipactconsult/tawasalna-file-manager:$(IMAGE_TAG) .

compose:
	docker compose up -d

decompose:
	docker compose down
