graphql-express
===

lets explore how to build a graphql based api and its many tools and options, batteries and security are included.

most of the example are base on [Apollo Server](https://www.apollographql.com/docs/) ,but we will also play with [Grapql-Yoga](https://github.com/prisma-labs/graphql-yoga) and others

- `01-basic` - just a basic apollo & express integration to "get it going" 🚀

- `02-graphql-code-generator` - a neat tool to generate usefull types and methods for a given gql endpoint. for this example we usd the (https://countries.trevorblades.com) endpoint to generate the content of `src/types.d.ts`

- `03-hashura-docker` - exploration of hashura with [self hosting ](https://hasura.io/docs/1.0/graphql/core/getting-started/docker-simple.html#docker-simple) solution. to get this going perform : 
  -  cd src/03-hashura-docker
  -  docker-compose up -d
  -  if `03-hashura-docker_graphql-engine_1` keeps on failing delete it and re-ren docker compose. this is happening because of race condition with the mysql container
  -  http://localhost:8080/console


### Misc. Tools

#### Explorers

- [GraphQL Playground Hosted](https://www.graphqlbin.com/v2/new) ⭐ 
- [GraphQL Playground Standalon](https://github.com/graphql/graphql-playground)
- [GraphiQL](https://github.com/graphql/graphiql)

#### Online Examples 
- [Countries GraphiQL](https://lucasconstantino.github.io/graphiql-online/)
