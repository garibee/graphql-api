import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import sequelize  from "./models/index";
// sequelize.sequelize.sync();

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});
server.start(()=>console.log("graphQLServer started")) ;