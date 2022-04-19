const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const main = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.use(express.json());

  app.use("/api/user", require("./routes/user"));

  app.get("/", (_, res) => {
    res.send("Hello");
  });

  app.listen(8000, () => {
    console.log("listening on 8000");
  });
};

main();
