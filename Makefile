install:
	npm ci

menu-game:
	node bin/menu-game.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

brain-games:
	node bin/brain-games.js

geometrical progression:
	node bin/brain-progression.js

SCM:
	node bin/brain-scm.js
