#IMAGE_TAG=latest
include .env

build:
	docker build -t droidzed/node-file-manager:$(IMAGE_TAG) .

compose:
	docker compose up -d

decompose:
	docker compose down
