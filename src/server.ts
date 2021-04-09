import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import './utils/connection';
import CategoryResolver from './graphql/category/CategoryResolver';
import VideoResolver from './graphql/videos/VideoResolver';

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  server.listen({ port: 3000 }, () => console.log('Running'));
};

bootstrap();
