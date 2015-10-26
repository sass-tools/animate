# --- sasslets-animate

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

publish: auto.install
	@git fetch origin
	@git checkout master
	$(eval pkgVersion := $(shell node make pkg:increaseVersion) )
	@git add --all
	git commit -n -m "updating to $(pkgVersion)"
	@echo "\n\tnew version $(pkgVersion)\n"
	@git push origin master
	@npm publish

# DEFAULT TASKS

.DEFAULT_GOAL := build
