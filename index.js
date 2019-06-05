import { GraphQLServer } from "graphql-yoga";

var sequelize = require('./models/index').sequelize;
// console.log(sequelize);
sequelize.sync();
// import resolvers from "./graphql/resolvers";
// import model from "./model/model.js";

// const server = new GraphQLServer({
//     typeDefs: "graphql/schema.graphql",
// });
// server.start(()=>console.log("graphQLServer started")) ;