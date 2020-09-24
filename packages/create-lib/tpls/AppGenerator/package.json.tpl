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
    "prepublish": "npm run build",
    "publish": "npm publish"
  },
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
  "dependencies": {},
  "devDependencies": {
    "@types/jest": "^26.0.14",
    "jest": "^26.4.2",
    "ts-jest": "^26.3.0",
    "typescript": "^4.0.2",
    "lint-staged": "^10.0.7",
    "prettier": "^1.19.1",
    "yorkie": "^2.0.0"
  }
}