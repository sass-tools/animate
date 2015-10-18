# --- nitro-skeleton

npmdir = $(shell npm bin)
whoami = $(shell whoami)

# TASKS

install:
	npm install
	bower install
	@node make build

auto.install:
	@node auto-install

live: auto.install
	@node make live

dev: auto.install
	@node make dev

# DEFAULT TASKS

.DEFAULT_GOAL := build
