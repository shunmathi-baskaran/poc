import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {makeExecutableSchema } from 'graphql-tools';
import  fs  from 'fs';
import  path from 'path';
import resolvers from './resolvers/resolver';
import cors from 'cors'

const schemaFile = path.join(__dirname, "schema.graphql");
const typeDefs = fs.readFileSync(schemaFile, "utf8");

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

const port = 3000;

app.use(cors());

// The root provides a resolver function for each API endpoint
//const root = resolvers;

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})