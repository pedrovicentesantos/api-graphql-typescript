import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import './utils/connection';
import CategoryResolver from './graphql/category/CategoryResolver';
import TvShowResolver from './graphql/tvShows/TvShowResolver';

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, TvShowResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  server.listen({ port: 3000 }, () => console.log('Running'));
};

bootstrap();
