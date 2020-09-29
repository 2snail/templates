{
  "name": "{{{ packageName }}}",
  "version": "0.0.0",
  "description": "",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "files": [
    "lib",
    "bin",
    "LICENSE",
    "README.md",
    "package.json"
  ],
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:ci": "jest --coverage",
    "clear": "rm -Rf lib",
    "prebuild": "npm run clear",
    "build": "tsc -p ./tsconfig.json",
    "release": "semantic-release",
    "standard-version": "standard-version"
  },
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "dependencies": {},
  "devDependencies": {
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "@types/jest": "^26.0.14",
    "@types/ramda": "^0.27.17",
    "commitizen": "^4.2.1",
    "cz-conventional-changelog": "^3.3.0",
    "husky": "^4.3.0",
    "jest": "^26.4.2",
    "lint-staged": "^10.4.0",
    "prettier": "^2.1.2",
    "semantic-release": "^17.1.2",
    "standard-version": "^9.0.0",
    "ts-jest": "^26.3.0",
    "typescript": "^4.0.2"
  }
}