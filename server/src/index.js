import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers/resolver';

const app = express();

const port = 3000

// The root provides a resolver function for each API endpoint
const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})