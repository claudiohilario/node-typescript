# Node + TypeScript + Express

Example with node and TypeScript

## Environment files:
- .env.dev
- .env.prod
- .env.test

## API
### Route:
- (DEV) GET `localhost:{4000}`/demo
- (PROD) GET `localhost:{4001}`/demo

### Response:
```json
{
   "data":[
      {
         "text":"demo"
      }
   ]
}
```

## Example

```sh
$ git clone https://github.com/claudiohilario/node-typescript.git

$ npm install
$ npm install --dev

$ npm run dev
$ npm run prod
$ npm run test

$ npm build
```