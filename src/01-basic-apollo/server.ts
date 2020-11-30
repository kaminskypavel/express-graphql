import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import depthLimit from 'graphql-depth-limit';

const app = express();
app.use(cors());
app.use(compression());

// https://www.apollographql.com/docs/apollo-server/integrations/middleware/
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(2)],
    playground: process.env.NODE_ENV !== "production"
});

server.applyMiddleware({ app, path: '/graphql' });

app.get("/", (req, res) => res.redirect("/graphql"))
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
