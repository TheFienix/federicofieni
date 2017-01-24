
build: node_modules
				node index.js

node_modules: package.js
				npm install

.PHONY: build
