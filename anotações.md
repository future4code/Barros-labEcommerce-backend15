resumo backend

npm init -y
tsc --init
npm i typescript @types/node -D

express:

npm i express cors
npm i @types/express @types/cors -D

```import express, { Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor ready!");    
});```

knex:

npm install knex mysql
npm install @types/knex @types/mysql -D
npm i dotenv