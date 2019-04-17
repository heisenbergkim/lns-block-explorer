import ApolloClient from "apollo-boost";

// const { ObjectId } = mongoose.Types;
// ObjectId.prototype.valueOf = function () {
//   return this.toString();
// };

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
  // uri: "http://localhost:4000"
});

export default client;
